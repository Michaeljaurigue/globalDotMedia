import React from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import "../../App/App.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./Home.css";
import HomePackage from "./HomePackage/HomePackage";
import AdditionalServices from "./AdditionalServices/AdditionalServices";
import StepsContainerLeft from "../../components/StepsContainerLeft/StepsContainerLeft";
import StepsContainerRight from "../../components/StepsContainerRight/StepsContainerRight";
import ClientTestimonials from "../../components/ClientTestimonials/ClientTestimonials";
import FormMain from "../../components/FormMain/FormMain";
import HeroHeader from "../../components/HeroHeader/HeroHeader";

function Home() {
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
    <div>
      {/* <HeroSection /> */}
      <HeroHeader
        link={"/images/home-0.jpg"}
        h1={"Global.Media"}
        h2={"Everything you need to promote your business"}
        p={
          "A website designed to convert leads into customers, plus daily social media posts and a fully managed advertising campaign all for one low monthly fee."
        }
      />

      <div className="home__section-one">
        <div className="home__section-one-container"></div>
        <h1 className="home__section-one-h1">
          Relax, we have your marketing covered.
        </h1>
        <p className="home__section-one-p">
          Get everything you need to promote your business without having to
          spend hours learning complex software and keeping up with the latest
          technology, We take care of everything for you so you can get on with
          running your business.
        </p>
      </div>

      <HomePackage />
      <AdditionalServices />
      <div className="home__section-one">
        <div className="home__section-one-container"></div>
        <h1 className="home__section-one-h1">
          A simple 4 step process that doesn't take up hours of your valuable
          time.
        </h1>
      </div>
      <StepsContainerLeft
        header="Step One: We build your website"
        p="We build you a modern website that is specifically designed to turn
        prospects into customers. We take care of everything for you so you
        can get on with running your business."
        src="/images/home-4.jpg"
      />

      <StepsContainerRight
        header="Step Two: Creative"
        p="Our design and copywriting team will create a modern website designed to convert visitors into leads and leads into customers."
        src="/images/home-6.jpg"
      />

      <StepsContainerLeft
        header="Step Three: Social Media"
        p="Every day our social media experts will post unique content specific to your business and interesting to your followers."
        src="/images/home-7.jpg"
      />

      <StepsContainerRight
        header="Step Four: Digital Advertising"
        p="Our ad specialist will analyse the best approach to an act your perfect customers and then design and launch your campaign."
        src="/images/home-8.jpg"
      />

      <div className="home__section-one">
        <div className="home__section-one-container"></div>
        <h1 className="home__section-one-h1">
          A fixed price so you know exactly where you stand.
        </h1>
        <p className="home__section-one-p">
          The marketing package costs £300 per month or £3000 per year. The
          service deliverables are as follows: a fast, modern website, including
          hosting and an SSL certificate; daily social media posts on Facebook
          and LinkedIn or Twitter; a fully managed Google Ads or Facebook
          advertising campaign. Additionally, we will set up Google Analytics
          and Google Search Console on your website. We will also provide you
          with a personal marketing dashboard, allowing you to review your
          campaigns in real time.
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={boxVariant1}
        initial="hidden"
        animate={control}
      >
        <ClientTestimonials />
      </motion.div>

      <FormMain />
    </div>
  );
}

export default Home;
