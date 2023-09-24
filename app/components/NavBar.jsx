import React from "react";
import Logo from "../ui/Logo";
import TopMenu from "../ui/TopMenu";
import SubMenu from "../ui/SubMenu";

function NavBar() {
  return (
    <div className="mx-auto flex w-full max-w-[1300px] items-center gap-4">
      <Logo />
      <div>
        <TopMenu />
        <SubMenu />
      </div>
    </div>
  );
}

export default NavBar;
