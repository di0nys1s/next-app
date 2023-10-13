import { NextRequest, NextResponse } from "next/server";

// We need to add the request param otherwise next will cache the response.
export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "Burak",
    },
    {
      id: 2,
      name: "Ozlem",
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  return NextResponse.json(
    {
      id: 1,
      name: body.name,
    },
    {
      status: 201,
    }
  );
}
