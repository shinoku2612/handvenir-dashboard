import OrderModel from "@/databases/order.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const quantityGroup = await OrderModel.aggregate([
            { $match: { status: "completed" } },
            { $unwind: "$product_list" },
            {
                $group: {
                    _id: null,
                    count: { $sum: "$product_list.quantity" },
                },
            },
        ]);
        const saleAmount = quantityGroup.reduce(
            (count, order) => count + order.count,
            0,
        );
        return NextResponse.json(saleAmount, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
