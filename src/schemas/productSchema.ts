import { model, Schema } from "mongoose";
import Product from "../models/product";

const ProductSchema = new Schema<Product>(
    {
        name: { type: String, required: true },
        specialPrices: { type: Object, required: false },
        inStock: { type: Boolean, required: true },
        basePrice: { type: Number, required: true },
        brand: { type: String, required: true }
    },
);

export default model("products", ProductSchema, "products");
