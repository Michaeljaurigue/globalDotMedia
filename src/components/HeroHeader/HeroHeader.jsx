import React from "react";
import "../../App/App.css";
import { Button } from "../Button/Button";
import "./HeroHeader.css";
import { motion, useAnimation } from "framer-motion";
import FormGuide from "../FormGuide/FormGuide";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

function HeroHeader(props) {
  const boxVariant1 = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0, // Slide up animation
      transition: { duration: 1 },
    },
    hidden: {
      opacity: 0,
      scale: 0,
      y: 100, // Start position off the screen
    },
  };

  const boxVariant2 = {
    // New box variant for the second section
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1 },
    },
    hidden: {
      opacity: 0,
      scale: 0,
      y: 100,
    },
  };

  const control1 = useAnimation(); // New control for the first section
  const control2 = useAnimation(); // New control for the second section
  const [ref1, inView1] = useInView(); // New ref and inView for the first section
  const [ref2, inView2] = useInView(); // New ref and inView for the second section

  useEffect(() => {
    if (inView1) {
      control1.start("visible");
    } else {
      control1.start("hidden");
    }
  }, [control1, inView1]);

  useEffect(() => {
    if (inView2) {
      control2.start("visible");
    } else {
      control2.start("hidden");
    }
  }, [control2, inView2]);

  return (
    <div className="hero__container">
      <img src={props.link} alt="Hero Background" className="hero-home-img" />
      <div className="hero__container_items">
        <motion.div
          ref={ref1}
          variants={boxVariant1}
          initial="hidden"
          animate={control1}
          className="hero__container_left"
        >
          <h1>{props.h1}</h1>
          <h2>{props.h2}</h2> {/* Fixed missing closing tag */}
          <p>{props.p}</p>
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
        </motion.div>
        <div className="hero__container_right">
          <motion.div
            ref={ref2}
            variants={boxVariant2}
            initial="hidden"
            animate={control2}
          >
            <FormGuide />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
