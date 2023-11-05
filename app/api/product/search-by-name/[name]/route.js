import prisma from "@/lib/utilities/Prisma";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    const { name } = context.params;
    console.log({ name });

    const items = await prisma.products.findMany({
      take: 5,
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });
    await prisma.$disconnect();
    return NextResponse.json(items);
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
