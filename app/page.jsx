import HeroHeader from "./_ui/HeroHeader";

import Articles from "./_components/Articles";
import Gallery from "./_components/Gallery";
import Tabs from "./_components/Tabs";
import Products from "./_components/Products";
import Team from "./_components/Team";
import Stats from "./_components/Stats";

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
