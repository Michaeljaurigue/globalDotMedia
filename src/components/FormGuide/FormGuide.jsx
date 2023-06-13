import React from "react";
import "./FormGuide.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function FormGuide() {
  const boxVariant = {
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
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <form className="form">
        <div className="form_container">
          <h2 className="form_title">Book Your Free Consultation</h2>
          <fieldset className="form_fieldset">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="form_input"
              required
              mix-length="2"
              max-length="30"
            />
          </fieldset>

          <fieldset className="form_fieldset">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form_input"
              required
            />
          </fieldset>

          <button className="form_button" type="Submit">
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default FormGuide;
