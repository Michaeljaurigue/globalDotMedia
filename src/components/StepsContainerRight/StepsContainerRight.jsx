import React from "react";
import "./StepsContainerRight.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function StepsContainerRight(props) {
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
        className="steps-container-right"
      > */}
      <div className="steps-container-right">
        <div className=" steps-container-right__image-container">
          <img
            className="steps-container-right__image"
            src={props.src || "/public/images/home-4.jpg"}
            alt="home-4"
          />
        </div>
        <div className="steps-container-right__content">
          <h1 className="steps-container-right__header">{props.header}</h1>
          <p className="home__section-steps-right-container-p">{props.p}</p>
        </div>
        </div>
      {/* </motion.div> */}
    </>
  );
}

export default StepsContainerRight;
