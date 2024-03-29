import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaWhatsapp,
  FaLinkedin,
  FaMailBulk,
  FaMobile,
} from "react-icons/fa";
import "./Footer.css";
import Marquee from "react-fast-marquee";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#fff", marginRight: "2rem", marginLeft: "1rem" }}
            />
            <div>
              <p> Plot no. 101, Opp. Global City,</p>
              <p> Vadgoan Maval, Pune- 412106</p>
              <p>Maharashtra, India </p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaMobile
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9156589900
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              vishwastechsolution@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Us</h4>
          {/* <p>
            This is Vishwabhushan Jamnik. I am Fullstack Developer also a
            Bussiness Developer. I have more Two Years of Experience in Web
            Development and Mobile App Development. Hands-on
            HTML,CSS,JavaScript, React js, React Native, Node.js,
            Java,Spring-boot, Firebase, MySQL, Oracle DB, Postgres DB, Altair
            Graphql.
          </p> */}
          <p>
            The Vishwa's TechSolution specializing in software development is
            dedicated to crafting innovative and tailored software solutions to
            meet the unique needs of businesses across various industries. With
            a team of skilled developers, engineers, and designers, We leverage
            cutting-edge technologies and best practices to deliver high-quality
            software products that drive efficiency, productivity, and growth.
          </p>

          <div className="social">
            <a href="https://facebook.com">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>

            <a href="https://github.com/vgjamnik">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>

            <a href="https://www.linkedin.com/in/vishwbhushan-jamnik-3abb7b22a?trk=contact-info">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>

            <a href="https://wa.me/9156589900">
              <FaWhatsapp
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="copyrite">
        <Marquee>
          {" "}
          <h3> ##### This Website is developed by @vgjamnik in 2024 #####</h3>
        </Marquee>
      </div>
    </div>
  );
};

export default Footer;
