import prisma from "@/lib/utilities/Prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const farms = await prisma.farms.findMany();

    // Convert BigInt id to string in each farm object
    const serializedFarms = farms.map((farm) => ({
      ...farm,
      id: farm.id.toString(),
    }));

    await prisma.$disconnect();
    return NextResponse.json(serializedFarms);
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
