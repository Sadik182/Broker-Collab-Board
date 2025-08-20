import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("BrokerBoard"); // keep consistent with your clients code
    const users = db.collection("users");

    // Ensure a unique index on email (safe to call repeatedly)
    await users.createIndex({ email: 1 }, { unique: true });

    const normalizedEmail = String(email).toLowerCase().trim();

    // Check existing
    const exists = await users.findOne({ email: normalizedEmail });
    if (exists) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const doc = {
      name: String(name).trim(),
      email: normalizedEmail,
      passwordHash,
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const { insertedId } = await users.insertOne(doc);

    return NextResponse.json(
      { ok: true, userId: insertedId.toString() },
      { status: 201 }
    );
  } catch (e: any) {
    // Duplicate key (race) fallback
    if (e?.code === 11000) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 409 }
      );
    }
    console.error("REGISTER ERROR:", e);
    return NextResponse.json(
      { message: "Registration failed" },
      { status: 500 }
    );
  }
}
