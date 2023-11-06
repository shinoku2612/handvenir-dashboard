import ProductModel from "@/databases/product.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const products = await ProductModel.find({}).select([
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
        const body = await request.json();
        return NextResponse.json(body);
    } catch (error) {
        return NextResponse.json(error);
    }
}
