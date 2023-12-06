import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json("Order", { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
