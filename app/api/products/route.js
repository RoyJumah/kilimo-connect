import { getProducts } from "@/app/services/apiProducts";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    return new NextResponse({
      status: 500,
      json: { error: "Internal Server Error" },
    });
  }
}
