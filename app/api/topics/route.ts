import { connectToMongoDB } from "@/app/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";
import EmployeeModel from "./schema";

export async function POST(request: NextRequest) {
  const { title, description } = await request.json();
  await connectToMongoDB();
  await EmployeeModel.create({ title, description });

  return NextResponse.json(
    { message: "Topic created successfully" },
    { status: 201 }
  );
}
