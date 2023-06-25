import React, { useEffect, useState } from "react";
import "../../App/App.css";
import { Button } from "../Button/Button";
import "./HeroHeader.css";
import { motion } from "framer-motion";
import FormGuide from "../FormGuide/FormGuide";
import { useInView } from "react-intersection-observer";

function HeroHeader(props) {
  const boxVariant1 = {
    visible: {
      opacity: 1,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  const boxVariant2 = {
    visible: {
      opacity: 1,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    setIsVisible1(inView1);
  }, [inView1]);

  useEffect(() => {
    setIsVisible2(inView2);
  }, [inView2]);

  return (
    <div className="hero__container">
      <img src={props.link} alt="Hero Background" className="hero-home-img" />
      <div className="hero__container_items">
        <motion.div
          ref={ref1}
          variants={boxVariant1}
          initial="hidden"
          animate={isVisible1 ? "visible" : "hidden"}
          className="hero__container_left"
        >
          <h1>{props.h1}</h1>
          <h2>{props.h2}</h2>
          <p>{props.p}</p>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonstyle="btn--outline"
              buttonsize="btn--large"
              path="/contact"
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
            animate={isVisible2 ? "visible" : "hidden"}
          >
            <FormGuide />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
