import CategoryModel from "@/databases/category.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } },
) {
    try {
        const categoryId: string = params.id;
        const category = await CategoryModel.findById(categoryId);
        return NextResponse.json(category);
    } catch (error) {
        return NextResponse.json(error);
    }
}
