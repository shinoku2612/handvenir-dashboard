import ProductModel from "@/databases/product.model";
import { uploadFile } from "@/libs/googledrive";
import { drive_v3 } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
    try {
        const products = await ProductModel.find().select([
            "-createdAt",
            "-updatedAt",
            "-slug",
            "-__v",
        ]);
        return NextResponse.json(products);
    } catch (error) {
        return new NextResponse(JSON.stringify(error), { status: 500 });
    }
}
export async function POST(request: NextRequest) {
    try {
        const body = await request.formData();
        const title = body.get("title") as string;
        const description = body.get("description") as string;
        const price = body.get("price") as string;
        const image = body.get("image") as Blob;
        const categories = body.getAll("categories") as string[];

        const driveImage: drive_v3.Schema$File = await uploadFile(title, image);

        const product = new ProductModel({
            title,
            price,
            description,
            slug: title,
            image: driveImage.webContentLink,
            categories: categories,
        });
        const newProduct = await product.save();
        revalidatePath("/product", "page");
        return NextResponse.json(newProduct);
    } catch (error) {
        return NextResponse.json(error);
    }
}
