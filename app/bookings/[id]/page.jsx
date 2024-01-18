"use client";
import { getBookingDetails } from "@/app/_services/apiBooking";
import React, { useState, useEffect } from "react";
import { GiFarmer } from "react-icons/gi";
import { format, isToday } from "date-fns";
import { calculatePrice, formatDistanceFromNow } from "@/lib/utilities/helpers";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function BookingDetailsPage({ params: { id } }) {
  const router = useRouter();
  const [bookingDetails, setBookingDetails] = useState([]);

  const goBack = () => {
    router.push("/bookings");
  };

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const details = await getBookingDetails(id);
        // If details is an object, put it into an array
        if (details && typeof details === "object" && !Array.isArray(details)) {
          setBookingDetails([details]);
        } else if (Array.isArray(details)) {
          // If details is an array, use it directly
          setBookingDetails(details);
        } else {
          // If details is null, undefined, or a non-array value, set bookingDetails to an empty array
          setBookingDetails([]);
        }
      } catch (error) {
        console.error(error, "There was an error fetching the booking details");
      }
    };

    fetchBookingDetails();
  }, [id]);

  return (
    <div className="mx-auto max-w-6xl p-6">
      {bookingDetails.map((booking, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-md bg-gray-50 px-[48px] pb-[64px] pt-[40px]"
        >
          <div className="flex items-center gap-4 py-2">
            <h2 className="text-[30px] font-[600]">
              Booking #{booking.id.toString().slice(0, 4)}...
            </h2>
            <span
              className={`inline-block  rounded-full px-2 py-1 text-[11px] font-[600] uppercase tracking-wide  ${
                booking.status === "approved"
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {booking.status}
            </span>
          </div>
          <header className="flex items-center justify-between gap-2 overflow-hidden bg-[#6366f1] px-[20px] py-[15px] text-[18px] text-gray-300">
            <div className="flex items-center gap-2">
              <GiFarmer className=" inline-block" size={20} />
              <p>{booking.duration}hr visit to </p>
              <p className="text-white">Farm</p> {booking.farm_id}
            </div>
            <p>
              {format(new Date(booking.date), "EEE, MMM dd yyyy")} (
              {isToday(new Date(booking.date))
                ? "Today"
                : formatDistanceFromNow(booking.date)}
              ){" "}
            </p>
          </header>
          <section className="rounded-md border  border-gray-100 bg-white px-[40px] pb-[12px] pt-[32px]">
            <div className="mb-[16px] flex items-center gap-[12px] ">
              <p>
                {booking.name}{" "}
                {booking.people > 1 ? `+ ${booking.people - 1} guests` : ""}
              </p>
              <div className="text-gray-500">
                <p> • {booking.contact}</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 rounded-sm bg-yellow-100 px-[32px] py-[16px] text-yellow-700">
              <div className="flex items-center">
                <HiOutlineCurrencyDollar size={20} />
                <p className="ml-2">
                  Total Price $
                  {calculatePrice(
                    Number(booking.people),
                    Number(booking.duration),
                  )}
                </p>
              </div>
              <p className="text-[14px] font-semibold uppercase">
                Will pay at property
              </p>
            </div>
            <div className=" py-[16px] text-right text-[12px] text-gray-500 ">
              <p>
                Booked{" "}
                {format(new Date(booking.created_at), "EEE, MMM dd yyyy, p")}
              </p>
            </div>
          </section>
          <div className="space-x-2 py-4 text-right ">
            <Button variant="destructive">Delete Booking</Button>
            <Button onClick={goBack}>Back</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
