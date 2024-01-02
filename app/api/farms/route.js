import { getFarms } from "@/app/_services/apiFarms";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const farms = await getFarms();
    return NextResponse.json(farms);
  } catch (error) {
    console.log(error);

    return new NextResponse("Something went wrong", { status: 400 });
  }
}
