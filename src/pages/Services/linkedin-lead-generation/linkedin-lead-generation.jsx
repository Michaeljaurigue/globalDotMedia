import React from "react";
import HeroHeader from "../../../components/HeroHeader/HeroHeader";
import ClientTestimonials from "../../../components/ClientTestimonials/ClientTestimonials";
import FormMain from "../../../components/FormMain/FormMain";
import LandingPage from "../../../components/LandingPage/LandingPage";
import VideoComponent from "../../../components/VideoComponent/VideoComponent";

function LinkedInLeadGeneration() {
  return (
    <>
      <HeroHeader
        h1={"LinkedIn Lead Generation Service"}
        h2={"Global.Media is a full-service digital marketing agency."}
        p={"Get help with your LinkedIn lead generation."}
        link={"/images/linked-in-lead-generation.jpg"}
      />
      <VideoComponent
        src={"https://www.youtube.com/embed/0bpZpvaOr8M"}
        title={"GlobalDotMedia Linkedin Lead Generation Service Offer Updated"}
      />
      <LandingPage
        h1first={"Our Packages"}
        pfirst={
          "We offer a range of digital marketing services to suit the needs and budgets of small and medium-sized businesses. Our services are flexible so clients can mix and match to get the right services. If you do not see a package that fits your exact requirements, contact us by phone or email to have a chat about how we can help."
        }
        h1second={"Package 1: Learners Club"}
        psecond={
          "Get access to training course delivered online to become an expert social media marketer. You and your team will learn the tricks and skills to master Facebook, Linkedin, Twitter and more for business."
        }
        h1third={"Package 2: Startup Essentials"}
        pthird={
          "Key elements every business needs to have in today’s digital marketplace: logo design – our graphic designers will work with you to define your brand identity. We will then create a logo that captures your business’ personality and ethos. Website design and development – we help you through the entire process to create the website that will help you achieve your business objectives. You buy the domain name, and we assist you in establishing the functions and developing the content for the website. Social media account set up on platforms – we design header images and set up accounts on Facebook, Linkedin, Twitter, Pinterest, Instagram, and Google My Business."
        }
        h1fourth={"Package 3: Small Business Marketers Club"}
        pfourth={
          "Support for businesses who want to take control of their marketing in-house. What you get: Digital Marketing Strategy to achieve your business objectives. You get a bespoke marketing plan for your business that you and your team can implement. 2 hours per month of marketing consultancy to review your progress and develop strategies for better results. Membership of Marketing Club quarterly review and discussion meetings to share experiences with other businesses and learn from each other."
        }
        h1fifth={"Package 4: Gold Marketing Club"}
        pfifth={
          "We all get so many emails every day. Take a moment to think about how many of these you delete and how many you actually open and read. In reality, we delete most emails we get. One of the reasons for deleting emails without a second thought is the subject line. Unless the subject line grabs our attention and captures our interest, the email goes into the trash. If people don't open your emails, there is virtually no chance that they will perform the action you want. We know how to create attention-grabbing subject lines that increase the likelihood of emails getting opened. This makes them more likely to engage with your emails and move further down the purchasing funnel. After the subject line, crafting the right email for the occasion is the next priority. Using the right structure, tone, call to action, and incentives requires skill to do properly. Otherwise, you risk losing the recipient to a competitor rather than getting a transaction. Sending emails at the right time is important to get the desired response. We can research your business sector and visitors to establish the best day and time to send your emails to have the greatest chance of getting people to read and engage with them. Every marketing activity has to be monitored using appropriate metrics because this is the best basis to make changes to make the medium more effective. We have experience analyzing email marketing metrics to identify what is working and make improvements where needed to increase your return on investment."
        }
        h1sixth={"Let's Get Started"}
        psixth={
          "Experience our comprehensive marketing packages designed to boost your business and save you time. Our packages include a thorough review of your existing marketing activities, competitor analysis, strategic development, action planning, and expert campaign design and management. Take control of your marketing and drive your business forward. Contact us today!"
        }
      />
      <ClientTestimonials />
      <FormMain />
    </>
  );
}

export default LinkedInLeadGeneration;
