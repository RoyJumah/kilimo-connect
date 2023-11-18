import HeroHeader from "./ui/HeroHeader";

import Articles from "./components/Articles";
import Gallery from "./components/Gallery";
import Tabs from "./components/Tabs";
import Products from "./components/Products";
import Team from "./components/Team";
import Stats from "./components/Stats";

function HomePage() {
  return (
    <>
      <HeroHeader />
      <Tabs />
      <Products />
      <Team />
      <Stats />
      <Articles />
      <Gallery />
    </>
  );
}

export default HomePage;
