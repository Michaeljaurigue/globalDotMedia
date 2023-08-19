import React from "react";
import "./StepsContainerLeft.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function StepsContainerLeft(props) {
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
      {/* <motion.div
        ref={ref}
        variants={boxVariant2}
        initial="hidden"
        animate={control}
        className="steps-container-left"
      > */}
      <div className="steps-container-left">
        <div className="steps-container-left__content">
          <h1 className="steps-container-left__header">{props.header}</h1>
          <p className="steps-container-left__text">{props.p}</p>
        </div>
        <div className="steps-container-left__image-container">
          <img
            className="steps-container-left__image"
            src={props.src || "/public/images/home-4.jpg"}
            alt={props.alt || "Global.Media Marketing Image"}
          />
        </div>
        </div>
      {/* </motion.div> */}
    </>
  );
}

export default StepsContainerLeft;
