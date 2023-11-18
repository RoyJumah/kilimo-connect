"use client";
import React, { useState, useEffect } from "react";

import Logo from "../ui/Logo";
import HeaderLinks from "../ui/HeaderMenu";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      if (currentScrollPos > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      if (isScrollingDown) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`bg-white ${
        isSticky
          ? " sticky top-0 z-[100] transform  transition-all duration-300 ease-in-out"
          : isHidden
          ? "-translate-y-full transform transition-all duration-300 ease-in-out"
          : ""
      } `}
    >
      <div className="mx-auto  flex max-w-6xl items-center justify-between p-6 px-[30px] py-[16px]">
        <Logo />
        <div>
          <HeaderLinks />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
