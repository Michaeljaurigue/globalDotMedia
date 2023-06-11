import React from "react";
import "../../App/App.css";
import { Button } from "../Button/Button";
import "../HeroSection/HeroSection.css";
import FormGuide from "../../Form-1/FormGuide";

function HeroSection() {
  return (
    <div className="hero__container">
      {/* <img
        src="../../images/hero-home.png"
        alt="Hero Background"
        className="hero-home-img"
      /> */}
      <div className="hero__container_items">
        <div className="hero__container_left">
          <h1>Global.Media</h1>
          <h2>Everything you need to promote your business</h2>
          <p>
            A website designed to convert leads into customers, plus daily
            social media posts and a fully managed advertising campaign all for
            just £10 per day
          </p>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              path="/projects"
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className="hero__container_right">
          <FormGuide />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
