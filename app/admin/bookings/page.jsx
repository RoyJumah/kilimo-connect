"use client";
import { useQuery } from "@tanstack/react-query";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Heading from "@/app/_ui/Heading";
import { formatDate } from "@/lib/utilities/helpers";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

const fetchBookingsData = async () => {
  const bookings = await fetch(`${API_BASE_URL}/api/admin/bookings`, {
    next: {
      revalidate: 60,
    },
  });
  if (!bookings.ok) throw new Error("Failed to fetch bookings data.");

  let data = await bookings.json();
  data = data.map((booking, index) => {
    return {
      ...booking,
      bookingNo: `BK${String(index + 1).padStart(3, "0")}`,
    };
  });

  return data;
};
export default function BookingsPage() {
  const {
    data,
    error,
    isLoading: LoadingBookingsData,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookingsData,
  });

  if (LoadingBookingsData) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <Heading>Bookings</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Booking</TableHead>
            <TableHead>Farm Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>People</TableHead>
            <TableHead>Duration(hrs)</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((booking, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">
                  {booking.bookingNo}
                </TableCell>
                <TableCell className="font-medium">{booking.farm_id}</TableCell>
                <TableCell className="font-medium">{booking.name}</TableCell>
                <TableCell className="font-medium">{booking.people}</TableCell>
                <TableCell>{booking.duration}</TableCell>
                <TableCell>
                  <span
                    className={` inline-block rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </TableCell>

                <TableCell>{formatDate(booking.date)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
