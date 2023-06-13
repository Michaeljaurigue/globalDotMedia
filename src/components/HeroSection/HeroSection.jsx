import React from "react";
import "../../App/App.css";
import { Button } from "../Button/Button";
import "../HeroSection/HeroSection.css";
import FormGuide from "../FormGuide/FormGuide";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

function HeroSection() {
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
    visible: {
      opacity: 1,
      scale: 1,
      y: 0, // Slide up animation
      transition: { duration: 1.5 },
    },
    hidden: {
      opacity: 0,
      scale: 0,
      y: 100, // Start position off the screen
    },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="hero__container">
      
      <div className="hero__container_items">
        
        <motion.div
          ref={ref}
          variants={boxVariant1}
          initial="hidden"
          animate={control}
          className="hero__container_left"
        >
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
        </motion.div>
        <div className="hero__container_right">
          <motion.div
            ref={ref}
            variants={boxVariant1}
            initial="hidden"
            animate={control}
          >
            <FormGuide />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
