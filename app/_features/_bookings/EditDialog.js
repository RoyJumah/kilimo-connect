"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getBookingDetails, updateBooking } from "@/app/_services/apiBooking";
import { BiLoader } from "react-icons/bi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function EditDialog({ open, onOpenChange, bookingId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [booking, setBooking] = useState(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (bookingId) {
      getBookingDetails(bookingId).then(setBooking).catch(console.error);
    }
  }, [bookingId]);

  const { mutate, isLoading: isUpdating } = useMutation({
    mutationFn: updateBooking,
    onSuccess: () => {
      queryClient.invalidateQueries("bookings");
      toast.success("Booking updated successfully");
      onOpenChange(false);
    },
    onError: (err) => toast.error(err.message),
  });

  const onSubmit = (data) => {
    mutate({ id: bookingId, ...data });
    onOpenChange(false);
  };

  if (!booking) {
    return null; // or some loading state
  }
  const { id, user_id, farm_id, name, contact, duration, date, people } =
    booking || {};

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Booking</DialogTitle>
          <DialogDescription>
            Update the details of your booking.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
        >
          <input {...register("id")} defaultValue={id} hidden />

          <input
            {...register("user_id")}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="user_id"
            type="text"
            hidden
            defaultValue={user_id}
          />

          <input
            {...register("farm_id")}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="farm_id"
            type="text"
            hidden
            defaultValue={farm_id}
          />

          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            {errors.name && (
              <p className="text-xs italic text-red-500">
                Please enter a name.
              </p>
            )}

            <input
              {...register("name", { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="name"
              type="text"
              disabled={isUpdating}
              defaultValue={name}
            />
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="contact"
            >
              Contact
            </label>
            {errors.contact && (
              <p className="text-xs italic text-red-500">
                Please enter a contact.
              </p>
            )}
            <input
              {...register("contact", { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="contact"
              type="text"
              defaultValue={contact}
              disabled={isUpdating}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="date"
            >
              Date
            </label>
            {errors.date && (
              <p className="text-xs italic text-red-500">
                Please enter a date.
              </p>
            )}
            <input
              {...register("date", { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="date"
              type="date"
              disabled={isUpdating}
              defaultValue={date}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="people"
            >
              People
            </label>
            {errors.people && (
              <p className="text-xs italic text-red-500">
                Please enter a number between 1 and 12.
              </p>
            )}
            <input
              {...register("people", { required: true, min: 1, max: 12 })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="people"
              type="number"
              disabled={isUpdating}
              defaultValue={people}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="duration"
            >
              Duration
            </label>
            {errors.duration && (
              <p className="text-xs italic text-red-500">
                Please enter a number between 1 and 3.
              </p>
            )}
            <input
              {...register("duration", { required: true, min: 1, max: 3 })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="duration"
              type="number"
              disabled={isUpdating}
              defaultValue={duration}
            />
          </div>
          <input {...register("status")} defaultValue="unconfirmed" hidden />
          <div className="flex justify-end gap-2">
            <Button
              onClick={(event) => {
                event.preventDefault();
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="destructive" disabled={isUpdating}>
              {isUpdating ? (
                <div className="flex items-center justify-center gap-4 font-semibold">
                  <BiLoader className="animate-spin" size={20} color="white" />
                  Please wait...
                </div>
              ) : (
                "Edit Cabin"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
