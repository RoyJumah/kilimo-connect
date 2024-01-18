import React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "../authentication/useUser";

import { useRef } from "react";
import { DialogClose } from "@/components/ui/dialog";
import { createBooking } from "@/app/_services/apiBooking";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BiLoader } from "react-icons/bi";

export default function CreateBookingForm({ farm_id }) {
  const { user } = useUser();
  const userId = user?.id;
  const userEmail = user?.email;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    mutate,
    isLoading: isCreating,
    // reset,
  } = useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      toast.success("Booking created successfully");
      // we are going to clear the cart and reset the form after the order was created successfully

      // reset();
    },
    onError: (err) => toast.error(err.message),
  });

  // since we want to close the modal as we clicked on the submit button,
  // we need to get access to the close function of the modal.
  // We can do this by using the closeRef.
  //we also used the DialogClose component to get access to the close function of the radix modal.

  const closeRef = useRef();

  const handleSubmitForm = (data) => {
    mutate(data);
    closeRef.current.click();
  };

  return (
    <>
      <h2 className="mb-4 text-center text-2xl font-bold">
        Book a tour to the farm
      </h2>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
      >
        <input {...register("id")} defaultValue={uuidv4()} hidden />

        <input
          {...register("user_id")}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="user_id"
          type="text"
          hidden
          defaultValue={userId}
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
            <p className="text-xs italic text-red-500">Please enter a name.</p>
          )}

          <input
            {...register("name", { required: true })}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="name"
            type="text"
            disabled={isCreating}
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
            defaultValue={userEmail}
            disabled={isCreating}
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
            <p className="text-xs italic text-red-500">Please enter a date.</p>
          )}
          <input
            {...register("date", { required: true })}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="date"
            type="date"
            disabled={isCreating}
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
            disabled={isCreating}
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
            disabled={isCreating}
          />
        </div>
        <input {...register("status")} defaultValue="unconfirmed" hidden />
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
            disabled={isCreating}
          >
            {isCreating ? (
              <div className="flex items-center justify-center gap-4 font-semibold">
                <BiLoader className="animate-spin" size={20} color="white" />
                Please wait...
              </div>
            ) : (
              "Book"
            )}
          </button>
        </div>
        <DialogClose ref={closeRef} className="hidden" />
      </form>
    </>
  );
}
