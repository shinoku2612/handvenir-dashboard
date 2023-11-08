import ProductModel from "@/databases/product.model";
import { deleteFile, uploadFile } from "@/libs/googledrive";
import { genarateSlug } from "@/utils/helper";
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string[] } },
) {
    try {
        const productId = params.id;
        const product = await ProductModel.findById(productId);
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json(error);
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } },
) {
    try {
        const productId = params.id;
        const body = await request.formData();

        const title = body.get("title") as string;
        const description = body.get("description") as string;
        const price = body.get("price") as string;
        const image = body.get("image") as Blob;
        const categories = body.getAll("categories") as string[];
        const slug = genarateSlug(title, productId);

        if (image.size !== 0) {
            const newImage = await uploadFile(productId, image);
            await ProductModel.findByIdAndUpdate(productId, {
                $set: {
                    title,
                    description,
                    price,
                    image: newImage.webContentLink,
                    categories,
                    slug,
                },
            });
        } else {
            await ProductModel.findByIdAndUpdate(productId, {
                $set: {
                    title,
                    description,
                    price,
                    categories,
                    slug,
                },
            });
        }
        revalidatePath("/product", "page");
        return NextResponse.json("Update successful!");
    } catch (error) {
        console.log(error);
        return NextResponse.json("Something went wrong");
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } },
) {
    try {
        const productId = params.id;
        await Promise.all([
            ProductModel.findByIdAndDelete(productId),
            deleteFile(productId),
        ]);
        revalidatePath("/product", "page");
        return NextResponse.json({ message: "Delete successful" });
    } catch (error) {
        return NextResponse.json(error);
    }
}
