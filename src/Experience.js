import React from "react";
import "./Experience.css";
import img1 from "./image/things1.svg";
import img2 from "./image/things2.svg";
function Experience() {
  return (
    <div className="experience">
        <h2>Discover AirBnB Experience</h2>
      <div className="experience__Cards">
        <div className="experience__Card">
          <img src={img1} />
          <div className="experience__CardDetails">
            <h3>Things to do on your trip</h3>
            <a href="#" className="button"> Experiences</a>
          </div>
        </div>
        <div className="experience__Card">
          <img src={img2} />
          <div className="experience__CardDetails">
            <h3>Things to do on your trip</h3>
            <a href="#" className="button"> Experiences</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
