import React from "react";
import CardItem from "../../../components/CardItem/CardItem";
import "./AdditionalServices.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function AdditionalServices() {
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

  const boxVariant5 = {
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
    <div className="cards">
      <h1 className="card__title">Additional Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* <motion.div
              ref={ref}
              variants={boxVariant2}
              initial="hidden"
              animate={control}
            > */}
              <CardItem
                src="/images/home-4.jpg"
                text="We source, design and send 2000 emails 4 times a month to your target market – we collect and verify target recipients based on industry, job title, and location. Choose your Email Marketing options "
                label="Targeted Email Marketing"
                path="https://globaldotmedia.com/our-services/email-marketing/"
              />

              <CardItem
                src="/images/home-5.jpg"
                text="Marketing App provides Trusted Partners Directory and 1-to-1  Marketing Training resources that puts your business in front of buyers 24/7/365. Download in App Stores HERE"
                label="Global Media App"
                path="https://play.google.com/store/apps/details?id=com.eaziapps.cms.android5faac55814c14"
              />
</ul>
<ul className="cards__items">
              <CardItem
                src="/images/home-6.jpg"
                text="Our accredited marketing courses are developed in partnership with the world-renowned Internet Business School. You can also choose our new 1 to 1 Digital Marketing Training."
                label="Marketing Training"
                path="https://globaldotmedia.com/digital-marketing-training/"
              />

              <CardItem
                src="/images/home-7.jpg"
                text="Our Book writing service works with aspiring authors to create their book, get published and market your new book. Choose  at Book Writing, Publishing & Marketing Services."
                label="Book Publishing and Marketing"
                path="https://globaldotmedia.com/book-publishing-and-marketing-service/"
              />
            {/* </motion.div> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdditionalServices;
