import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("BrokerBoard");
    const clients = await db.collection("clients").find({}).toArray();
    return new Response(JSON.stringify(clients), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching clients:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch clients" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("BrokerBoard");
    const body = await request.json();

    // Validate required fields
    const { name, email, phone, company } = body;
    if (!name || !email || !phone || !company) {
      return new Response(
        JSON.stringify({ error: "All Fields are Required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const newClient = {
      name,
      email,
      phone,
      company,
      createdAt: new Date(),
    };

    await db.collection("clients").insertOne(newClient);
    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error adding client:", error);
    return new Response(JSON.stringify({ error: "Failed to add client" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
