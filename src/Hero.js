import React from "react";
import "./Hero.css";

import hero from './image/hero.svg'
function Hero() {
  return (
    <div className="hero">
      <div className="hero__Image">
          <img src={hero} alt="" />
      </div>
      <div className="hero__Content">
        <h4>Not Sure where to go? Perfect.</h4>
        <a href="#"> I'm Flexible</a>
      </div>
    </div>
  );
}

export default Hero;
