import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        // const response = await fetch("http://localhost:8080/api/category");
        // const data = await response.json();
        return NextResponse.json([
            {
                _id: "6517c4a03486c3578a5b7b9b",
                name: "Dreamcatcher",
                slug: "dreamcatcher",
            },
            {
                _id: "6517c4a03486c3578a5b7b9c",
                name: "Macrame",
                slug: "macrame",
            },
        ]);
    } catch (error) {
        return NextResponse.json(error);
    }
}
