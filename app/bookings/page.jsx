"use client";
import { useEffect, useState } from "react";
import { getBookings } from "../_services/apiBooking";
import { useUser } from "../_features/authentication/useUser";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const { user } = useUser();
  const userId = user?.id;

  useEffect(() => {
    if (userId) {
      getBookings(userId).then(setBookings);
    }
  }, [userId]);
  return (
    <div className="mx-auto max-w-7xl p-4">
      <h1 className="mb-4 text-4xl">Bookings</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Farm ID</th>
            <th className="px-4 py-2">No of people</th>
            <th className="px-4 py-2">Duration</th>
            <th className="px-4 py-2">Booking Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="border px-4 py-2">{booking.id}</td>
              <td className="border px-4 py-2">{booking.farm_id}</td>
              <td className="border px-4 py-2">{booking.people}</td>
              <td className="border px-4 py-2">{booking.duration} hr(s)</td>
              <td className="border px-4 py-2">{booking.date}</td>
              <td className="border px-4 py-2">
                {" "}
                <span
                  className={`mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wide text-white ${
                    booking.status === "approved"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {booking.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
