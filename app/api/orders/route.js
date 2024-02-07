import { getAllOrders } from "@/app/_services/apiOrder";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const orders = await getAllOrders();
    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
