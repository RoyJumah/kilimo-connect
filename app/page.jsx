import React from "react";

import HeroHeader from "./ui/HeroHeader";
import News from "./components/News";

function HomePage() {
  return (
    <div className=" grid-cols-2-cols grid gap-8 ">
      <HeroHeader />

      <News />
    </div>
  );
}

export default HomePage;
