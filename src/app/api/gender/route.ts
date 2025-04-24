import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { gender } = body;

  if (!gender) {
    return NextResponse.json(
      { message: "Gender is required" },
      { status: 400 }
    );
  }
  const client = await clientPromise;
  const db = client.db("genderdb");

  const collection = db.collection("gender");

  const genderRegister = await collection.findOne({});
  console.log({ collec: genderRegister, gender });

  if (!genderRegister) {
    await collection.insertOne({
      gender
    })

    return NextResponse.json(
      { message: "Gender created successfully" },
      { status: 201 }
    );
  }

  return NextResponse.json(
    { message: "Gender already saved" },
    { status: 200 }
  );
}


export async function GET() {
  const client = await clientPromise;
  const db = client.db("genderdb");

  const collection = db.collection("gender");
  const gender = await collection.findOne({})
  return NextResponse.json(
    { gender },
    { status: 200 }
  );
}