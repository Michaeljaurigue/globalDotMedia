import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "../../App/App.css";
import "./Home.css";
import HomePackage from "./HomePackage/HomePackage";
import AdditionalServices from "./AdditionalServices/AdditionalServices";
import StepsContainerLeft from "../../components/StepsContainerLeft/StepsContainerLeft";
import StepsContainerRight from "../../components/StepsContainerRight/StepsContainerRight";
import FormMain from "../../components/FormMain/FormMain";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import { Helmet } from "react-helmet";
import useScrollToTop from "../../utils/useScrollToTop";
import ClientTestimonials from "../../components/ClientTestimonials/ClientTestimonials";

function Home() {
  useScrollToTop();
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
    <section className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Global.Media</title>
        <link rel="canonical" href="http://globaldotmedia.com/" />
        <meta
          name="description"
          content="A website designed to convert leads into customers, plus daily social media posts and a fully managed advertising campaign all for one low monthly fee."
        />
      </Helmet>
      <HeroHeader
        link={"/images/home-0.jpg"}
        h1={"Global.Media"}
        h2={"Everything you need to promote your business"}
        p={
          "A website designed to convert leads into customers, plus daily social media posts and a fully managed advertising campaign all for one low monthly fee."
        }
      />
      <div className="home__section">
        <div className="home__section-container"></div>
        <h1 className="home__section-header">
          Relax, we have your marketing covered.
        </h1>
        <p className="home__section-text">
          Get everything you need to promote your business without having to
          spend hours learning complex software and keeping up with the latest
          technology, We take care of everything for you so you can get on with
          running your business.
        </p>
      </div>
      <HomePackage />
      <AdditionalServices />
      <div className="home__section">
        <div className="home__section-container"></div>
        <h2 className="home__section-header">
          A simple 4 step process that doesn't take up hours of your valuable
          time.
        </h2>
      </div>
      <StepsContainerLeft
        header="Step One: We build your website"
        p="We build you a modern website that is specifically designed to turn
        prospects into customers. We take care of everything for you so you
        can get on with running your business."
        src="/images/services-3.jpg"
      />
      <StepsContainerRight
        header="Step Two: Creative"
        p="Our design and copywriting team will create a modern website designed to convert visitors into leads and leads into customers."
        src="/images/services-14.jpg"
      />
      <StepsContainerLeft
        header="Step Three: Social Media"
        p="Every day our social media experts will post unique content specific to your business and interesting to your followers."
        src="/images/services-13.jpg"
      />
      <StepsContainerRight
        header="Step Four: Digital Advertising"
        p="Our ad specialist will analyse the best approach to an act your perfect customers and then design and launch your campaign."
        src="/images/search-engine-optimization.jpg"
      />
      <div className="home__section">
        <div className="home__section-container"></div>
        <h2 className="home__section-header">
          A fixed price so you know exactly where you stand.
        </h2>
        <p className="home__section-text">
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
        {/* <ClientTestimonials /> */}
      </motion.div>
      <FormMain />
    </section>
  );
}

export default Home;
