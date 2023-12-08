import CategoryModel from "@/databases/category.model";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } },
) {
    try {
        const categoryId: string = params.id;
        if (!categoryId) {
            return NextResponse.json(
                { message: "Invalid category Id" },
                { status: 500 },
            );
        }
        const category = await CategoryModel.findById(categoryId);
        return NextResponse.json(category, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } },
) {
    try {
        const categoryId = params.id;
        const body = await request.formData();
        const name = body.get("name");
        const slug = body.get("slug");
        const category = await CategoryModel.findByIdAndUpdate(
            categoryId,
            {
                $set: {
                    name,
                    slug,
                },
            },
            { new: true },
        );
        revalidatePath("/category", "page");
        return NextResponse.json(category, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } },
) {
    try {
        const categoryId = params.id;
        await CategoryModel.findByIdAndDelete(categoryId);
        revalidatePath("/category", "page");
        return NextResponse.json(
            { message: "Delete successful" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
