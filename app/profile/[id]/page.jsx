"use client";

import { useUser } from "@/app/_features/authentication/useUser";
import React from "react";

export default function ProfilePage() {
  const { user } = useUser();

  return (
    <div className="mx-auto max-w-6xl p-6">
      <form className="overflow-hidden rounded-md border border-gray-100 bg-gray-100 px-[40px] py-[24px] text-[16px]">
        <div className="mb-5 flex flex-col gap-2  sm:flex-row sm:items-center">
          {/* we used basis to ensure that the labels don't pile on top of each other, important style to keep in mind */}
          <label className="sm:basis-40">Email</label>
          <input
            type="text"
            id="email"
            disabled
            value={user?.email}
            className="rounded-sm border border-gray-300  bg-gray-50 px-[12px] py-[8px] shadow-sm"
          />
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center ">
          {/* we used basis to ensure that the labels don't pile on top of each other, important style to keep in mind */}
          <label className="sm:basis-40">User Id</label>
          <input
            type="text"
            id="user id"
            disabled
            value={user?.id}
            className="rounded-sm border border-gray-300 bg-gray-50 px-[12px] py-[8px] shadow-sm"
          />
        </div>
      </form>

      <div className="mt-6">
        <h2 className="text-center font-mangaba text-[40px] sm:text-[60px] md:text-[80px]">
          Get in Touch
        </h2>
        <div className="mx-auto my-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 sm:my-6 md:my-10"></div>
        <p className="text-sm sm:text-lg">
          Need help with your account? Reach via your favorite channel and
          we&apos;ll respond in 24 hours or less.
        </p>
        <ul className="text-sm sm:text-lg">
          <li>• Email hello@kilimoconect.io</li>
          <li>
            • DM via Twitter{" "}
            <a
              href="https://twitter.com/royjumah"
              rel="noreferrer"
              target="_blank"
              className="underline"
            >
              @kilimoconect
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
