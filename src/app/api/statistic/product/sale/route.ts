import OrderModel from "@/databases/order.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const result = await OrderModel.aggregate([
            { $match: { status: "completed" } },
            {
                $unwind: "$product_list",
            },
            {
                $lookup: {
                    from: "products",
                    localField: "product_list.product",
                    foreignField: "_id",
                    as: "product",
                },
            },
            {
                $unwind: "$product",
            },
            {
                $unwind: "$product.categories",
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "product.categories",
                    foreignField: "slug",
                    as: "category",
                },
            },
            { $unwind: "$category" },
            {
                $group: {
                    _id: "$category.name",
                    count: { $sum: "$product_list.quantity" },
                },
            },
        ]);
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
