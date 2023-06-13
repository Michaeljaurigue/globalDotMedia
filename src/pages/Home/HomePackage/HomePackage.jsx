import React from "react";
import CardItem from "../../../components/CardItem/CardItem";
import "./HomePackage.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function HomePackage() {
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0, // Slide up animation
      transition: { duration: 0.3 },
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
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
      scale: 0,
      y: 100, // Start position off the screen
    },
  };

  const boxVariant3 = {
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

  const boxVariant4 = {
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
    <div className="cards">
      <motion.h1
        // ref={ref}
        // variants={boxVariant4}
        // initial="hidden"
        // animate={control}
        className="card__title"
      >
        Included in the Package
      </motion.h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/home-1.jpg"
              text="Get a modern website that is specifically designed to turn prospects into customers"
              label=""
              path="https://globaldotmedia.com/contact-us-2/"
            />

            <CardItem
              src="/images/home-2.jpg"
              text="Get fresh posts daily to keep your social media accounts buzzing with excitement"
              label=""
              path="https://globaldotmedia.com/contact-us-2/"
            />

            <CardItem
              src="/images/home-3.jpg"
              text="Attract new leads with fully managed Facebook advertising or Google Ads."
              label=""
              path="https://globaldotmedia.com/contact-us-2/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePackage;
