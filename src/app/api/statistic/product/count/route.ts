import ProductModel from "@/databases/product.model";
import { type NextRequest, NextResponse } from "next/server";

// GET Product count
export async function GET(request: NextRequest) {
    try {
        const productCount = await ProductModel.find().count();
        return NextResponse.json(productCount, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(error, { status: 500 });
    }
}

export async function POST(request: NextRequest) {}
