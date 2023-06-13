import React from "react";
import "./digital-marketing-training.css";
import HeroHeader from "../../../components/HeroHeader/HeroHeader";
import ClientTestimonials from "../../../components/ClientTestimonials/ClientTestimonials";
import FormMain from "../../../components/FormMain/FormMain";
import Cards from "../../../components/Cards/Cards";
import LandingPage from "../../../components/LandingPage/LandingPage";

function DigitalMarketingTraining() {
  return (
    <>
      <HeroHeader
        h1={"Digital Marketing Training"}
        h2={"Learn all the skills you need to get more customers."}
        p={
          "You get live training and support from UK and international business marketing experts to design and manage your marketing like a pro: Know how to do marketing strategy, LinkedIn marketing, email marketing and more."
        }
        link={"/images/digital-marketing.jpg"}
      />
      <LandingPage
        h1first={"Relax, we have your marketing training covered."}
        pfirst={
          "Learn everything you need to promote your business without having to spend hours learning confusing content and struggling to make sense of complicated marketing strategies. We take care of everything for you to learn fast so you can get on with running your business."
        }
        h1second={
          "A simple 4 step process that doesn't take up hours of your valuable time"
        }
        psecond={
      "Step One: Discovery. One of our marketing trainers will take you through a quick discovery process to find out more about your business and make sure we are a good fit for each other. Step Two: Personalised Learning Plan. Our marketing trainers will work with you to choose the topics and skills that you want to focus on. We will develop a learning plan and content outline to achieve your learning goals. Step Three: Learning Delivery. Our marketing trainer will meet with you in a zoom session for 60 minutes to deliver the training topics using a mix of interactive activities, content delivery, and practice. You will also receive learning materials by email to enhance and support your learning. Step Four: Review of Learning and additional support. Our marketing trainers will review your learning with you to establish whether you have achieved your learning goals on the course and identify any additional support from which you can benefit. If appropriate, you can choose from our additional learning courses, commission us to provide mentoring support, or commission our done-for-you marketing services."}
        h1third={
          "A fixed price so you know exactly where you stand."
        }
        pthird={
          "The marketing courses cost £199 each. You can bundle all three starter courses for £299. The programme deliverables are as follows: 60 minutes of live training, one-to-one or in small groups, over Zoom with an expert marketing trainer. Weekly email course materials to support and enhance your learning. The opportunity to practice designing and planning your first marketing campaign so you know how to implement your learning. A workbook with resources to reinforce your learning and have space to make notes of important information/content. In addition to the above, we will also give you advice and support via WhatsApp about your learning needs and implementing your learning content. Provide you with a personal learning dashboard so you can review your learning and outcomes in real time."
        }
        h1fourth={
          ""
        }
        pfourth={
          ""
        }
        h1fifth={""}
        pfifth={""}
      />
      <ClientTestimonials />
      <FormMain />
    </>
  );
}

export default DigitalMarketingTraining;
