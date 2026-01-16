import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "blogType"] | order(order asc, title asc) {
      _id,
      title,
      "slug": slug.current
    }
  `;

  const data = await client.fetch(query);
  return NextResponse.json(data);
}
