import { getEditors } from "@/data/dummy-editors";
import Image from "next/image";
import React from "react";

const Editors = () => {
  const editors = getEditors();
  return (
    <div className="mt-12">
      <h2 className=" mb-2 text-lg font-bold  uppercase text-[#9da452] sm:text-xl sm:font-black">
        editor&apos;s desk
      </h2>
      <ul className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-2">
        {editors.map((editor) => (
          <li key={editor.id}>
            <div className="flex flex-col gap-4">
              <Image
                src={editor.image}
                width={100}
                height={100}
                alt={editor.name}
                className="rounded-full"
              />
              <div>
                <p className="cursor-pointer text-[16px] font-bold text-stone-600 transition-all duration-150 hover:text-[#9da452] md:text-lg">
                  {editor.description}
                </p>
                <div className="text-xs text-stone-400">
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
