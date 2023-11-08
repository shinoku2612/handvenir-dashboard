import mongoose from "mongoose";
import { ClientConnector } from "@/libs/mongodb";
import URLSlug from "mongoose-slug-generator";
ClientConnector.plugin(URLSlug);

const CategorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        slug: { type: String, slug: "name", unique: true },
    },
    { timestamps: true },
);

const CategoryModel = ClientConnector.model("Category", CategorySchema);

export default CategoryModel;
