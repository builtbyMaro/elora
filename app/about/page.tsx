import Hero from "./sections/Hero Section/hero";
import Introduction from "./sections/introduction section/introduction";
import Craft from "./sections/craftsmanship section/craft";
import Ingredients from "./sections/ingredients section/ingredients";
import Identity from "./sections/identity section/identity";
import CTA from "../(homepage)/sections/CTA section/cta";

const About = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Craft />
      <Ingredients />
      <Identity />
      <CTA />
    </>
  );
};

export default About;
