import React from "react";

function Stat({ icon, title, value, color }) {
  return (
    <div className="grid-cols-custom gap-x-6.5 grid grid-rows-2 gap-y-1 rounded-md border border-gray-100 bg-gray-50 p-6">
      <div
        className={`grid-row-1 grid-row-span-full flex aspect-[1] items-center justify-center rounded-full bg-${color}-100`}
      >
        <svg className={`h-8 w-8 text-${color}-700`}>{icon}</svg>
      </div>
      <h5 className="self-end text-xs font-semibold uppercase tracking-wider text-gray-500">
        {title}
      </h5>
      <p className="text-6xl font-medium leading-none">{value}</p>
    </div>
  );
}

export default Stat;
