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
export async function PATCH(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const orderId = searchParams.get("boost");
        if (!orderId)
            return NextResponse.json(
                { message: "No orderId" },
                { status: 500 },
            );
        const order = await OrderModel.findById(orderId);
        switch (order?.status) {
            case "pending":
                order.status = "shipping";
                break;
            case "shipping":
                order.status = "completed";
                break;
            case "completed":
            case "canceled":
            default:
                return NextResponse.json(
                    { message: "Cannot change this order's status" },
                    { status: 401 },
                );
        }
        await order.save();
        return NextResponse.json(
            { message: "Change status successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
