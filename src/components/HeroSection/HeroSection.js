import React from "react";
import "../../App/App.css";
import { Button } from "../../components/Button/Button";
import "../HeroSection/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero__container">
      <div className="hero__container_items">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <div className="hero__container_left">
          <img
            className="hero__img-hello"
            src="images/img-hello.png"
            alt="Hello,"
          />
          <h1>my name is</h1>
          <img
            className="hero__img-michael"
            src="/images/global_dot_media-img-home.png"
            alt="Michael Jaurigue"
          />

          <p>
            I'm a <span className="hero__subtile">software developer</span>
          </p>
          <p>
            and <span className="hero__subtile">artist.</span>
          </p>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              path="/projects"
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div className="hero__container_right">
          <div className="hero__container_right_img">
            <img
              className="hero-img"
              src="images/michael-jaurigue-img.jpg"
              alt="Michael Jaurigue"
            />
          </div>
        </div>
        {/* <div>
        <img
          className="hero-img"
          src="images/michael-jaurigue-img.jpg"
          alt="Michael Jaurigue"
        />
      </div> */}
      </div>
    </div>
  );
}

export default HeroSection;
