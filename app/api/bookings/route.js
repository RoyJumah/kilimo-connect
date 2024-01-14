import { getBookings } from "@/app/_services/apiBooking";
import { NextResponse} from "next/server";

export async function GET(req) {
  try {
    const userId = req.query.userId;
    const bookings = await getBookings(userId);
    return NextResponse.json(bookings);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}