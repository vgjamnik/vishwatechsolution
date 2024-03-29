import React from "react";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import HeroImg2 from "../componants/HeroImg2";
import AboutMe from "../componants/AboutMe";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="We are Expertize in"
        text="  Webapp & Mobile App Development"
      />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default About;
