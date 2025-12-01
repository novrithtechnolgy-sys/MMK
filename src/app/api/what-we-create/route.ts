import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "whatWeCreate"] | order(number asc){
      _id,
      number,
      title,
      shortTitle,
      description,
      "imageUrl": image.asset->url
    }
  `;

  const data = await client.fetch(query);
  return NextResponse.json(data);
}
