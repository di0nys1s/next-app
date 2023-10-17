import { connectToMongoDB } from "@/app/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";
import { EmployeeModel, schemaValidation } from "./schema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schemaValidation.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  await connectToMongoDB();
  await EmployeeModel.create(body);

  return NextResponse.json(
    { message: "Employee created successfully" },
    { status: 201 }
  );
}

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const employees = await EmployeeModel.find().sort({ createdAt: -1 });

  return NextResponse.json(employees);
}
