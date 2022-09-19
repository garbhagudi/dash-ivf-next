import React from "react";
import HeroHome from "sections/about-us/banner";
import FeaturesBlocks from "sections/about-us/featuresBlock";
import Management from "sections/about-us/management";
import Testimonials from "sections/about-us/news";
import CallToAction from "sections/home/subscribe-us";

const IndexPage = () => {
  return (
    <div>
      <HeroHome />
      <Management />
      <FeaturesBlocks />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default IndexPage;
