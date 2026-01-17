import HeroSection from "../Components/Home/HeroSection";
import GreetingSection from "../Components/Home/GreetingSection";
import TraditionsSection from "../Components/Home/TraditionsSection";
import CategoriesStorySection from "../Components/Home/CategoriesStorySection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Greeting Section */}
      <GreetingSection />

      {/* Traditions Section */}
      <TraditionsSection />

      {/* Categories Story Section */}
      <CategoriesStorySection />
    </>
  );
}
