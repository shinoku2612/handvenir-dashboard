import mongoose, { CallbackError } from "mongoose";
import { ClientConnector } from "@/libs/mongodb";
import { genarateSlug } from "@/utils/helper";

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        slug: { type: String, require: true, unique: true },
        categories: { type: Array, default: [] },
    },
    { timestamps: true },
);

const ProductModel = ClientConnector.model("Product", ProductSchema);
export default ProductModel;
