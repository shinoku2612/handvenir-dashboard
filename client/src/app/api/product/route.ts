import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        console.log(request.headers)
        const response = await fetch("http://localhost:8080/api/product/all");
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(error);
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
