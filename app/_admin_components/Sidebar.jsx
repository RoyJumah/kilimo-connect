import MainNav from "./MainNav";

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="row-span-full  flex flex-col gap-[32px] border border-gray-100 bg-white px-[24px] py-[32px]">
      <div className="flex items-center text-2xl font-bold text-[#9da452]">
        <p className="font-satisfy">kilimo</p>
        <span>Connect</span>
      </div>
      <MainNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
