import { getAllBookings } from "@/app/_services/apiBooking";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const bookings = await getAllBookings();
    return NextResponse.json(bookings);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
