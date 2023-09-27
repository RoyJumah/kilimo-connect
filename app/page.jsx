import React from "react";

import HeroHeader from "./ui/HeroHeader";

import Products from "./components/Products";
import Footer from "./components/Footer";
import Editors from "./components/Editors";
import Articles from "./components/Articles";

function HomePage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] ">
      <HeroHeader />
      <div>
        <Products />
        <Editors />
        <Articles />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
