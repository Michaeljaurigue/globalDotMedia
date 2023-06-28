import React from "react";
import HeroHeader from "../../../components/HeroHeader/HeroHeader";
import ClientTestimonials from "../../../components/ClientTestimonials/ClientTestimonials";
import FormMain from "../../../components/FormMain/FormMain";
import LandingPage from "../../../components/LandingPage/LandingPage";
import BulletPointChart from "../../../components/ServicePackageChart/ServicePackageChart";
import VideoComponent from "../../../components/VideoComponent/VideoComponent";

function OnlineTraining() {
  return (
    <>
      <HeroHeader
        h1={"Online Training Courses"}
        h2={"Global.Media is a full-service digital marketing agency."}
        p={
          "We offer a range of online training courses to help you learn the skills you need to succeed in the digital marketing industry."
        }
        link={"/images/online-training.jpg"}
      />

      <VideoComponent
        src={"https://www.youtube.com/embed/JsZIrMiAwdU"}
        title={"Online Training Courses"}
      />

      <LandingPage
        h1first={
          "Learn the skills you need to succeed in the digital marketing industry."
        }
        pfirst={
          "Want to master marketing strategies for your business? Learn the fundamentals and how to run & manage Social media, Google Pay-Per-Click, FacebookAds, Linkedin and many more. Marketing is an essential part of building a successful business. digital marketing is faster, cheaper, can reach most of your target clients, and is far more effective than traditional marketing techniques of yesteryear. The number of your potential customers looking for businesses like yours online every day is staggering. Research suggests that 81% of consumers search online before buying a product or service. Relying on your website to achieve high search result rankings organically takes years  – time and resources that many small and local businesses do not have."
        }
        h1second={
          "Marketing is an essential part of building a successful business."
        }
        psecond={
          "Research shows that the majority of businesses (70%) manage their marketing in-house themselves. The reluctance to outsource marketing is coupled with worrying data reported by Brynley-Jones and Social Media Examiner that shows most businesses get questionable results from DIY social media marketing as follows: fewer than 20% of marketers rate their digital communications at an advanced level, 53% of businesses plan to spend more on organic social media, the number-one question marketers want to be answered (92%) is which social media marketing tactics work best, figuring out how to best connect with people remains high on the list of questions marketers want to be answered (90%), a significant 86% of marketers want to know how to measure their return on investment for social media activities, 86% of marketers are looking for guidance on sifting through enormous social networks and connecting with the right people, and a surprising 86% don't know which tools are best to simplify their social media work."
        }
        h1third={"There's a Better Way for Your Business"}
        pthird={
          "Global.Media has partnered with the world-renowned Internet Business School to bring you the biggest selection of tutor-led online courses in the marketing methods that can transform your business. Learn how to use Facebook to drive targeted traffic to your website and market your business. The course is available to you whenever you want to do and complete it. You can share your course with your network (for example staff, friends, and family). We regularly update our courses, which means that you will have all the latest strategies. Get the knowledge and skills to get your business up and running today. Start your video-based learning supported by learning guides and tests to measure your progress."
        }
        h1fourth={""}
        pfourth={""}
        h1fifth={""}
        pfifth={""}
        h1sixth={""}
        psixth={""}
        h1seventh={""}
        pseventh={""}
        h1eighth={""}
        peighth={""}
        h1ninth={""}
        pninth={""}
        h1tenth={"About The Courses"}
        ptenth={"This course is perfect for you if you’re a Business Owner, Budding Entrepreneur or want to start a marketing business but not sure how to do it properly."}
        h1eleventh={""}
        peleventh={
          <BulletPointChart
          packageName={"What You Get with our Online Training Courses"}
          bulletPoints={[
            "Market your business more effectively",
            "Increase brand recognition",
            "Promote your products and services directly to those that want them",
            "Increase your visibility and reputation online",
            "Attract new clients",
            "Reach your ideal target market",
            "Increase your profits",
          ]}
        />

        }
      />
      <ClientTestimonials />
      <FormMain />
    </>
  );
}

export default OnlineTraining;
