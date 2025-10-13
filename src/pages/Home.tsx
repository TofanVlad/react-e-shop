import AppHeroSection from "@/components/home/sections/AppHeroSection";
import AppFeatureSection from "@/components/home/sections/AppFeatureSection";
import AppProductsSection from "@/components/home/sections/AppProductsSection";
import AppBrowseSection from "@/components/home/sections/AppBrowseSection";
import AppNewsletterSection from "@/components/home/sections/AppNewsletterSection";
import Default from "../layouts/Default";

function Home() {
  return (
    <Default>
      <AppHeroSection />
      <AppFeatureSection />
      <AppProductsSection />
      <AppBrowseSection />
      <AppProductsSection title="select" />
      <AppNewsletterSection />
    </Default>
  );
}

export default Home;
