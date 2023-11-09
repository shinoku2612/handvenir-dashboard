import mongoose from "mongoose";
import { ClientConnector } from "@/libs/mongodb";

const OrderSchema = new mongoose.Schema(
    {
        product_list: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                },
                quantity: { type: Number },
                price: { type: Number },
                _id: false,
            },
        ],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        receiver: {
            name: { type: String, required: true },
            phone: { type: String, required: true },
        },
        method: { type: String, enum: ["cod", "paypal"], default: "cod" },
        total: { type: Number },
        status: {
            type: String,
            enum: ["pending", "shipping", "completed", "canceled"],
            default: "pending",
        },
        address: { type: String, required: true },
        isCancelable: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true },
);

const OrderModel = ClientConnector.model("Order", OrderSchema);
export default OrderModel;
