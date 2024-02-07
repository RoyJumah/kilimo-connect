import { getAllCheckoutSessions } from "@/app/_services/apiPayments";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const payments = await getAllCheckoutSessions();
    return NextResponse.json(payments);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
