import CategoryModel from "@/databases/category.model";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const categories = await CategoryModel.find();
        return NextResponse.json(categories, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
export async function POST(request: NextRequest) {
    try {
        const body = await request.formData();
        const name = body.get("name");
        const slug = body.get("slug");
        const category = await CategoryModel.create({ name, slug });
        revalidatePath("/category", "page");
        return NextResponse.json(category, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
