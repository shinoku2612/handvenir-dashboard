import mongoose from "mongoose";
import { ClientConnector } from "@/libs/mongodb";

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, unique: true },
});

const CategoryModel = ClientConnector.model("Category", CategorySchema);

export default CategoryModel;
