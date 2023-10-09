import React from "react";

import HeroHeader from "./ui/HeroHeader";

import Products from "./components/Products";

import Editors from "./components/Editors";
import Articles from "./components/Articles";

function HomePage() {
  return (
    <>
      <HeroHeader />
      <Products />
      <Editors />
      <Articles />
    </>
  );
}

export default HomePage;
