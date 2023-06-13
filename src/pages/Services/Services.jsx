import React from "react";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import LandingPage from "../../components/LandingPage/LandingPage";
import ClientTestimonials from "../../components/ClientTestimonials/ClientTestimonials";
import FormMain from "../../components/FormMain/FormMain";
import ServicesList from "./ServicesList/ServicesList";

function Services() {
  return (
    <>
      <HeroHeader
        link={"/images/services-14.jpg"}
        h1={"Our Services"}
        h2={
          "Global.Media is a full-service creative media marketing and Advertising agency with offices in London and Cornwall."
        }
        p={
          "Global.Media provides you with guaranteed lead generation, captivating content and modern marketing strategies so that you can reach a greater audience, enabling you to attract, engage and retain new customers. Our marketing experts offer you access to first-rate design, media and technology partners who will create attention-grabbing advertising and effective marketing campaigns that engage your target audience."
        }
      />
      <LandingPage
        h1first={"Professional marketing for the digital age"}
        pfirst={
          "Professional marketing for the digital age. Global.Media has experience in delivering the full range of advertising and digital marketing techniques to achieve your business goals and suit your budget. We are the marketing partners for your business to reach your ideal clients & sell more. Our principles comprise: Market Research before you start your business. Identify your target audience, where they are online and messages that will engage them. Identify the right mix of advertising and digital marketing activities to effectively target the right customers for your business. Digital marketing strategy design and implementation. Data-driven marketing with regular monitoring, data analysis and continuous improvement. Flexible & Affordable advertising and marketing packages that guarantee Return on Investment."
        }
        h1second={""}
        psecond={""}
        h1third={""}
        pthird={""}
        h1fourth={""}
        pfourth={""}
        h1fifth={""}
        pfifth={""}
      />
      <ServicesList />
      <ClientTestimonials
        link1="https://www.youtube.com/embed/_2GlvjuaBoo"
        link2="https://www.youtube.com/embed/zphArpt5T9Q"
      />
      <FormMain />
    </>
  );
}

export default Services;
