import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image
      src="https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/logo/logo.png?t=2023-11-15T10%3A31%3A08.485Z"
      height={40}
      width={40}
      alt="Kilimo Connect Logo"
      priority
      className="inline-block"
    />
  );
}

export default Logo;
