import OrderModel from "@/databases/order.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const earningGroup = await OrderModel.aggregate([
            { $match: { status: "completed" } },
            { $unwind: "$product_list" },
            {
                $group: {
                    _id: null,
                    amount: {
                        $sum: {
                            $multiply: [
                                "$product_list.quantity",
                                "$product_list.price",
                            ],
                        },
                    },
                },
            },
        ]);
        const earningAmount = earningGroup.reduce(
            (amount, earning) => amount + earning.amount,
            0,
        );
        return NextResponse.json(earningAmount, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
