import prisma from "@/lib/utilities/Prisma";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    const id = context.params.id;

    const farm = await prisma.farms.findFirst({
      where: { id: id },
    });

    // Convert BigInt id to string
    const serializedFarm = farm ? { ...farm, id: farm.id.toString() } : null;

    await prisma.$disconnect();
    return NextResponse.json(serializedFarm);
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
