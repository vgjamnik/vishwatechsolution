import React from "react";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import HeroImg2 from "../componants/HeroImg2";
import ContactForm from "../componants/ContactForm";
import "./ContactStyles.css";
import pro3 from "../assets/pro3.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <HeroImg2 heading="You Can" text=" Contact Us On :- 9156589900" />
      <div className="mask-1">
        {/* <div>
          <Link className="btn">Download CV</Link>
        </div> */}
        <img className="pro3-img" src={pro3} alt="introImg" />
      </div>
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
