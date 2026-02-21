import HeroSection from "./sections/Hero Section/Hero";
import AboutSection from "./sections/About Section/About";
import Products from "./sections/Products Section/products";
import CTA from "./sections/CTA section/cta";

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
