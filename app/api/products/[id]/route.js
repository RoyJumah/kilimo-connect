import { getProductDetails } from "@/app/services/apiProducts";

import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    const { id } = context.params;
    const productDetails = await getProductDetails(id);

    return NextResponse.json(productDetails);
  } catch (error) {
    console.log(error);

    return new NextResponse("Something went wrong", { status: 400 });
  }
}
