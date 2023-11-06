import ProductModel from "@/databases/product.model";
import { NextRequest, NextResponse } from "next/server";
import "@/libs/mongodb";

export async function GET(request: NextRequest) {
    try {
        const products = await ProductModel.find();
        return NextResponse.json(products);
    } catch (error) {
        console.log("Error");
        return NextResponse.json("Cannot get products");
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
