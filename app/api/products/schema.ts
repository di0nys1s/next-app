import mongoose from "mongoose";
import { z } from "zod";

export const schemaValidation = z.object({
  name: z.string().min(3).max(255),
  price: z.number().min(0),
});

const schema = new mongoose.Schema(
  {
    name: String,
    price: Number,
  },
  {
    timestamps: true,
  }
);

export const ProductModel =
  mongoose.models.Product || mongoose.model("Product", schema);
