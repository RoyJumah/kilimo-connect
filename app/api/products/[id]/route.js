import prisma from "@/lib/utilities/Prisma";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    const { id } = context.params;
    const product = await prisma.products.findFirst({
      where: { product_id: id },
    });
    await prisma.$disconnect();
    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
