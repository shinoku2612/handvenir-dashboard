import UserModel from "@/databases/user.model";
import { type NextRequest, NextResponse } from "next/server";

// GET User count
export async function GET(request: NextRequest) {
    try {
        const productCount = await UserModel.find().count();
        return NextResponse.json(productCount, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}

export async function POST(request: NextRequest) {}
