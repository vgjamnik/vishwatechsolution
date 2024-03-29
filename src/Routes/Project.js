import React from "react";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import HeroImg2 from "../componants/HeroImg2";
import PricingCard from "../componants/PricingCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Following are our most recent works" />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
