import { NextRequest, NextResponse } from "next/server";
import { schemaValidation, ProductModel } from "./schema";
import { connectToMongoDB } from "@/app/libs/MongoConnect";

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const products = await ProductModel.find().sort({ createdAt: -1 });

  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schemaValidation.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  await connectToMongoDB();
  await ProductModel.create(body);

  return NextResponse.json(
    { message: "Product created successfully" },
    { status: 201 }
  );
}
