"use client";

import Heading from "@/app/_ui/Heading";

import { useState } from "react";

export default function AdminLoginPage() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
  }

  return (
    <div className="mx-0 my-auto flex max-w-[1200px] flex-col gap-[32px]">
      <Heading>Create a new User</Heading>

      <form
        className="overflow-hidden rounded-md border border-gray-100 bg-white px-[24px] py-[24px] text-[14px]"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="remember" value="true" />

        <div className="grid grid-cols-[240px,1fr,1.2fr] items-center gap-[2.4rem] border-b border-gray-100 py-[1.2rem]">
          <label htmlFor="name">Full Name</label>
          <input
            id="full-name"
            value={fname}
            name="full-name"
            type="text"
            autoComplete="name"
            required
            className="relative block w-full appearance-none rounded-md   border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-[240px,1fr,1.2fr] items-center gap-[2.4rem] border-b border-gray-100 py-[1.2rem]">
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            value={email}
            name="email"
            type="email"
            autoComplete="email"
            required
            className="relative block w-full appearance-none rounded-md   border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-[240px,1fr,1.2fr] items-center gap-[2.4rem] border-b border-gray-100 py-[1.2rem]">
          <label htmlFor="email-address">Password (min 8 characters)</label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-lime-800 sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-[240px,1fr,1.2fr] items-center gap-[2.4rem] border-b border-gray-100 py-[1.2rem]">
          <label htmlFor="email-address">Repeat Password </label>
          <input
            id="repeat-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="repeat-password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-lime-800 sm:text-sm"
          />
        </div>

        <div className="flex justify-end gap-[12px] py-[1.2rem]">
          <button className="rounded-md border border-gray-600 bg-white px-[12px] py-[8px] text-[14px] font-[500] text-black shadow-sm">
            Cancel
          </button>
          <button className="rounded-md  bg-[#9da452] px-[12px] py-[8px] text-[14px] font-[500] text-[#eef2ff] shadow-sm">
            Create new user
          </button>
        </div>
      </form>
    </div>
  );
}
