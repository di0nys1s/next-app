import { connectToMongoDB } from "@/app/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";
import { EmployeeModel, schemaValidation } from "../schema";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectToMongoDB();
  const employee = await EmployeeModel.findById(params.id);

  return NextResponse.json(employee);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectToMongoDB();
  await EmployeeModel.findByIdAndDelete(params.id);

  return NextResponse.json(
    { message: "Employee deleted successfully" },
    { status: 200 }
  );
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schemaValidation.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  await connectToMongoDB();
  await EmployeeModel.findByIdAndUpdate(params.id, body);

  return NextResponse.json({ message: "Employee updated successfully" });
}
