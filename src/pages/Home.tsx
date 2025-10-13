import AppHero from "@/components/home/sections/AppHero";
import AppFeatureSection from "@/components/home/sections/AppFeatureSection";
import AppProductsSection from "@/components/home/sections/AppProductsSection";
import Default from "../layouts/Default";

function Home() {
  return (
    <Default>
      <AppHero />
      <AppFeatureSection />
      <AppProductsSection />
    </Default>
  );
}

export default Home;
