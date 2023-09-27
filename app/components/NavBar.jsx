import React from "react";
import Logo from "../ui/Logo";
import TopMenu from "../ui/TopMenu";
import SubMenu from "../ui/SubMenu";

function NavBar() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-[1300px] justify-between gap-4">
        <Logo />
        <div>
          <TopMenu />
        </div>
      </div>
      <div className="mx-auto max-w-2xl p-6">
        <SubMenu />
      </div>
    </>
  );
}

export default NavBar;
