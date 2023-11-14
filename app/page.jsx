import React from "react";

import HeroHeader from "./ui/HeroHeader";

import Products from "./components/Products";

import Editors from "./components/Editors";
import Articles from "./components/Articles";
import Gallery from "./components/Gallery";

function HomePage() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <HeroHeader />
      <Products />
      <Editors />
      <Articles />
      <Gallery />
    </div>
  );
}

export default HomePage;
