import mongoose from "mongoose";
import { z } from "zod";

export const schemaValidation = z.object({
  name: z.string().min(3).max(255),
  email: z.string().min(1).email(),
});

const schema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
  },
  {
    // This will create createdAt and updatedAt fields
    timestamps: true,
  }
);

export const EmployeeModel =
  mongoose.models.Employee || mongoose.model("Employee", schema);
