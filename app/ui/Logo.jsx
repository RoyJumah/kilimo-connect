import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image
      src="https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/logo/logo.png?t=2023-11-14T15%3A12%3A42.775Z"
      height={150}
      width={150}
      alt="Kilimo Connect Logo"
      priority
    />
  );
}

export default Logo;
