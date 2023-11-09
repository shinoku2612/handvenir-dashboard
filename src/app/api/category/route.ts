import CategoryModel from "@/databases/category.model";
import { NextRequest, NextResponse } from "next/server";
import { ClientConnector } from "@/libs/mongodb";

export async function GET(request: NextRequest) {
    try {
        const categories = await CategoryModel.find();
        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse.json(error);
    }
}