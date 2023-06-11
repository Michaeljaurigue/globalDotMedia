import React from "react";
import "../../App/App.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./Home.css";
import HomePackage from "./HomePackage/HomePackage";
import AdditionalServices from "./AdditionalServices/AdditionalServices";
import StepsContainerLeft from "../../components/StepsContainerLeft/StepsContainerLeft";
import StepsContainerRight from "../../components/StepsContainerRight/StepsContainerRight";
import ClientTestimonials from "../../components/ClientTestimonials/ClientTestimonials";
import FormMain from "../../components/FormMain/FormMain";

function Home() {
  return (
    <div>
      <HeroSection />
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
          service deliverables are as follows: A fast modern website including
          hosting and SSL certificate. Daily social media posts to Facebook and
          Linkedin or Twitter. A fully manged Google Ads or Facebook advertisng
          campaign. In addition to the above we will also Set up Google
          Analytics and Google Search Console on your website Provide you will a
          personal marketing dashboard so you can review your campaigns in
          realti
        </p>
      </div>

      <ClientTestimonials
        link1="https://www.youtube.com/embed/_2GlvjuaBoo"
        link2="https://www.youtube.com/embed/zphArpt5T9Q"
      />

      <FormMain />
    </div>
  );
}

export default Home;
