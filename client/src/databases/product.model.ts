import mongoose from "mongoose";
import { ClientConnector } from "@/libs/mongodb";
import URLSlug from "mongoose-slug-generator";
ClientConnector.plugin(URLSlug);

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        slug: { type: String, slug: "title", unique: true },
        categories: { type: Array, default: [] },
    },
    { timestamps: true },
);

const ProductModel = ClientConnector.model("Product", ProductSchema);
export default ProductModel;
