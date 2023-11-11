import OrderModel from "@/databases/order.model";
import UserModel from "@/databases/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const orders = await OrderModel.find().populate(
            "user",
            "avatar name",
            UserModel,
        );
        return NextResponse.json(orders, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
