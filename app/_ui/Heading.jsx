import React from "react";

export default function Heading({ children }) {
  return (
    <div>
      <h1 className="text-[30px] font-[600] tracking-wide text-gray-700">
        {children}
      </h1>
    </div>
  );
}
