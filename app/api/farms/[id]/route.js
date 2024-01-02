import { getFarmDetails } from "@/app/services/apiFarms";

import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    const id = context.params.id;

    const farmDetails = await getFarmDetails(id);

    return NextResponse.json(farmDetails);
  } catch (error) {
    console.log(error);

    return new NextResponse("Something went wrong", { status: 400 });
  }
}
