import { LiaLeafSolid } from "react-icons/lia";
import { GiSpade } from "react-icons/gi";
import { LuSun } from "react-icons/lu";

export default function Tabs() {
  const tabs = [
    {
      title: "Natural & Organic",
      icon: <LiaLeafSolid />,
    },
    {
      id: 2,
      title: "Best Equipment",
      icon: <GiSpade />,
    },
    {
      id: 3,
      title: "Dedicated Team",
      icon: <LuSun />,
    },
  ];
  return (
    <div className="mx-auto mt-4 max-w-6xl p-6 sm:mt-8 md:mt-12">
      <ul className="flex gap-4">
        {tabs.map((tab, i) => (
          <div
            key={i}
            className="relative flex items-center gap-2  border border-gray-300 p-4 sm:p-8 md:p-12"
          >
            <div className="absolute inset-0 m-1 border border-gray-300 "></div>
            <div className="text-[48px]">{tab.icon}</div>
            <p className="text-xl text-[#3c6a36] sm:text-2xl md:text-2xl">
              {tab.title}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
}
