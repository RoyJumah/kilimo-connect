"use client";
import React, { useEffect, useState } from "react";
import { getBookings } from "../_services/apiBooking";
import { useUser } from "../_features/authentication/useUser";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MdModeEdit } from "react-icons/md";
import { IoIosTrash } from "react-icons/io";
import EditDialog from "../_features/_bookings/EditDialog";

import DeleteDialog from "../_features/_bookings/DeleteDialog";
import { HiEllipsisVertical, HiEye } from "react-icons/hi2";
import Link from "next/link";
import { useBookings } from "../_features/_bookings/useBookings";

export default function BookingsPage() {
  const [editingBookingId, setEditingBookingId] = useState(null);
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { bookings, isLoading, error } = useBookings();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mx-auto max-w-7xl p-4">
      <h1 className="mb-4 text-4xl">Bookings</h1>
      <table className="w-full table-auto">
        <thead>
          <tr className="border">
            <th className="px-4 py-2">Booking ID</th>
            <th className="px-4 py-2">Farm ID</th>
            <th className="px-4 py-2">No of people</th>
            <th className="px-4 py-2">Duration</th>
            <th className="px-4 py-2">Booking Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((booking) => (
            <tr key={booking.id} className="border">
              <td className="px-4 py-2">{booking.id}</td>
              <td className="px-4 py-2">{booking.farm_id}</td>
              <td className="px-4 py-2">{booking.people}</td>
              <td className="px-4 py-2">{booking.duration} hr(s)</td>
              <td className="px-4 py-2">{booking.date}</td>
              <td className="px-4 py-2">
                {" "}
                <span
                  className={`mb-4 inline-block rounded-full px-2 py-1 text-[11px] font-[600] uppercase tracking-wide  ${
                    booking.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {booking.status}
                </span>
              </td>
              <td>
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <HiEllipsisVertical size={20} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="px-4 py-2">
                    <DropdownMenuItem>
                      <Link href={`/bookings/${booking.id}`} legacyBehavior>
                        <a className="flex space-x-4">
                          <HiEye color="#9ca3af" size={16} />
                          <span>See details</span>
                        </a>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onSelect={() => {
                        setEditingBookingId(booking.id);
                        setDialogOpen(true);
                      }}
                      className="space-x-4 "
                    >
                      <MdModeEdit color="#9ca3af" size={16} />
                      <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => setOpen(true)}
                      className="space-x-4 "
                    >
                      <IoIosTrash color="#9ca3af" size={16} />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
        <EditDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          bookings={bookings}
          bookingId={editingBookingId}
        />
        <DeleteDialog open={open} onOpenChange={setOpen} />
      </table>
    </div>
  );
}
