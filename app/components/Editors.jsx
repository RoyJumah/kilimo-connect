import { getEditors } from "@/data/dummy-editors";
import Image from "next/image";
import React from "react";

const Editors = () => {
  const editors = getEditors();
  return (
    <div className="mt-12">
      <h2 className=" mb-2 text-lg font-bold uppercase text-[#9da452] sm:text-xl sm:font-black">
        In our opinion
      </h2>
      <ul className=" flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
        {editors.map((editor) => (
          <li key={editor.id}>
            <div className="flex items-center gap-6">
              <Image
                src={editor.image}
                width={100}
                height={100}
                alt={editor.name}
                className="rounded-full"
              />
              <div>
                <p className="cursor-pointer text-[16px] font-bold transition-all duration-150 hover:text-[#9da452] sm:text-xl">
                  {editor.description}
                </p>
                <div className="text-[10px] text-[#777]">
                  <h3 className="font-bold ">{editor.name}</h3>
                  <p>{editor.role}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Editors;
