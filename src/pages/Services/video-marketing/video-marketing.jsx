import React from "react";
import HeroHeader from "../../../components/HeroHeader/HeroHeader";
import ClientTestimonials from "../../../components/ClientTestimonials/ClientTestimonials";
import FormMain from "../../../components/FormMain/FormMain";
import LandingPage from "../../../components/LandingPage/LandingPage";
import BulletPointChart from "../../../components/ServicePackageChart/ServicePackageChart";

function VideoMarketing() {
  return (
    <>
      <HeroHeader
        h1={"Video Marketing"}
        h2={"Global.Media is a full-service digital marketing agency."}
        p={"Do you need help with Video Marketing? We can help you."}
        link={"/images/video-marketing.jpg"}
      />

      <LandingPage
        h1first={"Tik Tok You Don't Stop"}
        pfirst={
          "Video has become the preferred way for online consumers to engage with online content. That is not surprising given that as many as 96% of Internet users watch videos online. All available date suggests that videos are also more effective at communicating a business’s message to their ideal customers. Put simply, if you are not using videos, you are missing out on potential customers! Producing videos is no longer enough – you must get people to watch the videos. What should be in your video? How long is too long? Who can you trust to produce your videos? Where should you distribute them to get maximum visibility and eyes on your videos? This is where video marketing becomes an essential part of any business’s marketing mix."
        }
        h1second={"Engaging Content"}
        psecond={
          "Today, businesses must find a way to communicate their message, vision, and service offering quickly to engage and sell more. Online video is no longer a side project for publishers or big businesses; it has become the main event for everyone in e-commerce. Videos have the power to amplify virtually all types of content online, including explainer videos, vlogging, training content, email updates, social media posts, and website content. If you want more people to know about your business and its products or services, if you want visitors to stay longer on your website, if you want more people to share your content, then you must start using videos. With the widespread consumption of online videos, businesses have responded by creating more video content. Not leveraging the potential of videos to grow your business would be a missed opportunity, and you risk falling behind in the years ahead."
        }
        h1third={"Getting Sales"}
        pthird={
          "Research suggests that watching engaging videos influences the buying in both B2B and B2C as the following graphic illustrates. Video advertising ROI is high compared to other forms of digital advertising. Kissmetrics found that anywhere from 64-85% are more likely to buy after watching a product video, meaning that very few potential buyers fail to complete a transaction after watching a compelling video."
        }
        h1fourth={"Mobile Marketing"}
        pfourth={
          "ZenithOptimedia’s Online Video Forecasts report shows that just over half (52.7 percent) of all video will be consumed on mobile devices in 2016, while Ooyala’s latest Global Video Index demonstrated that 46 percent of all video plays in Q4 2015 were on mobile devices. Furthermore, Reuters predicts video will grow 14 times within five years and account for 70 percent of mobile network traffic. These statistics show that the trend is for people watching more online videos on mobile devices."
        }
        h1fifth={"Video Marketing Challenges"}
        pfifth={
          "There are many challenges for businesses attempting to use videos to their advantage including the time and expertise required to produce videos, strategies to turn viewers into customers, determining where and how to distribute videos for the highest return on investment, identifying trustworthy professionals for scripting, filming, and editing videos to achieve different objectives, expertise in utilizing videos on websites, video platforms, email updates, social media, and advertising, the ability to target social media advertising at the right audience, producing engaging videos that align with business objectives, and analyzing video marketing analytics data."
        }
        h1sixth={"Using Videos for Business"}
        psixth={
          "We know how to use videos to get the best return on investment on your video marketing spend. We have helped businesses like yours to get more viewers, clicks to their website from videos, and engage their target audience using videos. Our expert video production team will handle every stage of your video production process from concept to delivery. Our video marketing service helps you to develop an online video strategy for your business because, without a clear strategy and effective execution, it’s unlikely you’ll see a return on the cost and time you spend on producing videos for your business. A clear strategy ultimately makes video marketing manageable and measurable. The strategy will identify the video distribution channel(s) that best fit your business and business goals. By developing buyer personas, we will be able to identify the platforms that your target audience go to watch videos and the type of videos that they engage with. In order to ensure intelligent execution of the strategy, we create a calendar that outlines the distribution schedule that will engage your target audience, enabling us to share both organic and promoted videos when your ideal customers are most likely to see and engage with them. Where appropriate, we will use world-class third-party tools to schedule posts and research trending topics and keywords, in order to ensure social media posts are always relevant, thereby increasing the likelihood of getting attention, engagement, and sharing. We actively monitor and manage social media to identify posts that are working and those that are being ignored. If something isn’t working, we remove it and try new angles or approaches for those that are getting attention and engagement. With millions of people actively using video platforms every day, can you afford not to be doing video marketing?"
        }
        h1seventh={""}
        pseventh={""}
        h1eighth={""}
        peighth={""}
        h1ninth={""}
        pninth={""}
        h1tenth={""}
        ptenth={""}
        h1eleventh={""}
        peleventh={
          <BulletPointChart
            packageName={"Video Marketing Service Package"}
            one={"Review video assets and campaigns."}
            two={
              "Propose video production and marketing strategies to engage and attract target clients."
            }
            three={"Storyboard video content and production specification."}
            four={
              "Videography team film, edit and produce your video in line with specifications that fit your business objectives, resources and budget."
            }
            five={
              "Setup, launch and manage video advertising campaigns on Google (Youtube) and social media platforms."
            }
            six={"Analyse performance and report monthly."}
            seven={""}
            eight={""}
            nine={""}
            ten={""}
            eleven={""}
            twelve={""}
            thirteen={""}
            fourteen={""}
            fifteen={""}
            sixteen={""}
          />
        }
      />
      <ClientTestimonials />
      <FormMain />
    </>
  );
}

export default VideoMarketing;
