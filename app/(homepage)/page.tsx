import HeroSection from "./components/Hero Section/Hero";
import AboutSection from "./components/About Section/About";
import Products from "./components/Products Section/products";
import CTA from "./components/CTA section/cta";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Products />
      <CTA />
    </>
  );
};

export default Homepage;
