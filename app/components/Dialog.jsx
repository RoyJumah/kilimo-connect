import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IoSearchOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

export default function DialogComponent() {
  return (
    <Dialog>
      <DialogTrigger>
        <IoSearchOutline size={24} className="inline-block cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="border-none bg-transparent shadow-none sm:max-w-[800px]">
        <div className=" relative border-b pb-4">
          <input
            type="text"
            placeholder="Search..."
            className="  bg-inherit text-lg text-white outline-none placeholder:text-white sm:text-xl md:text-2xl"
          />
        </div>
        <CiSearch
          size={24}
          color="#fff"
          className="absolute  right-10 top-10"
        />
      </DialogContent>
    </Dialog>
  );
}
