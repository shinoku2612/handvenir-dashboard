import ProductModel from "@/databases/product.model";
import { uploadFile } from "@/libs/googledrive";
import { drive_v3 } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { genarateSlug } from "@/utils/helper";
import { retryRequest } from "@/utils/retry";

export async function GET(request: NextRequest) {
    try {
        const products = await ProductModel.find();
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

        const newProduct = new ProductModel({
            title,
            price,
            description,
            categories: categories,
        });

        const slug = genarateSlug(title, newProduct._id.toString());
        const driveImage: drive_v3.Schema$File = await uploadFile(
            newProduct._id.toString(),
            image,
        );

        newProduct.image = driveImage.webContentLink!;
        newProduct.slug = slug;
        const [product] = await Promise.all([
            newProduct.save(),
            retryRequest({
                url: driveImage.webContentLink!,
                times: 5,
                delay: 300,
            }),
        ]);
        revalidatePath("/product", "page");
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json(error);
    }
}
