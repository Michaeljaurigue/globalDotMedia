 import React from "react";
import "./StepsContainerLeft.css";

function StepsContainerLeft(props) {
  return (
    <>
      <div className="home__section-steps-left">
        <div className="home__section-steps-left-container">
          <h1 className="home__section-steps-left-container-header">
            {props.header}
          </h1>
          <p className="home__section-steps-left-container-p">{props.p}</p>
        </div>
        <div className="home__section-steps-right-container">
          <img
            className="home__section-steps-right-container-img"
            src={props.src || "/public/images/home-4.jpg"}
            alt="home-4"
          />
        </div>
      </div>
    </>
  );
}

export default StepsContainerLeft;
