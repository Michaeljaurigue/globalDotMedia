import React from "react";
import "./StepsContainerLeft.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function StepsContainerLeft(props) {
  const boxVariant = {
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
      transition: { duration: 2 },
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
    <>
      <motion.div
              ref={ref}
              variants={boxVariant2}
              initial="hidden"
              animate={control}
              className="home__section-steps-left">
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
      </motion.div>
    </>
  );
}

export default StepsContainerLeft;
