import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image
      src="/images/logo/logo.png"
      height={150}
      width={150}
      alt="Kilimo Connect Logo"
    />
  );
}

export default Logo;
