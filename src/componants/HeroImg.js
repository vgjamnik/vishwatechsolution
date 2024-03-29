import React from "react";
import "./HeroImg.css";
import introImg from "../assets/bg/introImg.jpg";
import { Link } from "react-router-dom";
import "../index.css";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="introImg" />
      </div>
      <div className="content">
        <h1>
          We are Working on <br />
        </h1>
        <p> Transforming Digital Dreams into Reality</p>
        <br />
        <div className="btns">
          <Link className="btn" to={"/Project"}>
            {" "}
            Project{" "}
          </Link>
          <Link className="btn-light" to={"/Contact"}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
