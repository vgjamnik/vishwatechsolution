import { Link } from "react-router-dom";
import "./PricingCard.css";
import React from "react";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3> - Basic - </h3>
          <span className="bar"></span>
          <p className="btc"> $ 100</p>
          <p> - 2 Days -</p>
          <p> - HTML/CSS/Javascript -</p>
          <p> Responsive Design</p>
          <Link to="/Contact" className="btn">
            {" "}
            PURCHASE NOW{" "}
          </Link>
        </div>
        <div className="card">
          <h3> - Premium - </h3>
          <span className="bar"></span>
          <p className="btc"> $ 200</p>
          <p> - 3 Days -</p>
          <p> - React Js/ React Native -</p>
          <p> Responsive Design</p>
          <Link to="/Contact" className="btn">
            {" "}
            PURCHASE NOW{" "}
          </Link>
        </div>
        <div className="card">
          <h3> - Business - </h3>
          <span className="bar"></span>
          <p className="btc"> $ 500</p>
          <p> - 5 Days -</p>
          <p> - Complete App -</p>
          <p> Responsive Design</p>
          <Link to="/Contact" className="btn">
            {" "}
            PURCHASE NOW{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
