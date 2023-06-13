import React from "react";
import HeroHeader from "../../../components/HeroHeader/HeroHeader";
import ClientTestimonials from "../../../components/ClientTestimonials/ClientTestimonials";
import FormMain from "../../../components/FormMain/FormMain";
import LandingPage from "../../../components/LandingPage/LandingPage";

function LocalMarketing() {
  return (
    <>
      <HeroHeader
        h1={"Local Marketing"}
        h2={"Global.Media is a full-service digital marketing agency."}
        p={"Get help with your Local Marketing Strategy"}
        link={"/images/local-marketing.jpg"}
      />

      <LandingPage
        h1first={"Importance of Local Marketing"}
        pfirst={
          "Research shows that consumers make 80% of purchases from businesses within a 10-mile radius of their location. Google Trends data reinforces this, revealing that the number of searches for businesses 'near me' has almost doubled in the last few years. In simple terms, consumers tend to buy locally unless there are no local businesses that can fulfill their needs or offer competitive value. According to studies, 61% of local searches result in a purchase. Local searchers are typically seeking shops, restaurants, or other businesses within walking distance. This highlights the significance of local search as it can significantly impact sales and profits for businesses. Local businesses that are easily discoverable attract more website traffic and drive more footfall to their physical premises. By being visible to local consumers and providing the information they seek, businesses can simplify the purchasing process and ultimately increase sales and profits. To fully benefit from local marketing, businesses must optimize their online presence for local search, offer the relevant information that customers want on their website, and establish systems that facilitate easy and straightforward purchasing experiences."
        }
        h1second={"Challenges of Going Local"}
        psecond={
          "‘71% of users value information provided in local search results’. The local marketing landscape has changed a lot in the last few years making it harder to for businesses to do it properly. In addition to the shifting landscape, several factors add to the complexity for local businesses."
        }
        h1third={
          "‘50% of local business searches are carried out on mobile devices’"
        }
        pthird={
          "The rise in consumers’ mobile phone use to search for local businesses means that businesses must have mobile-friendly websites. Frequent changes such as Google’s April 2015 algorithm update muddy the waters for businesses trying to adapt to mobile. How should you make your website mobile-friendly? Many businesses are struggling to meet the requirements to be classed as mobile-friendly. Furthermore, your website has to be optimized for local search in order to appear high in the search engine results pages for local searches. Many businesses do not know about or how to implement all of the on-site and off-site factors that influence a business’ ranking on local search results. The fact that these factors are constantly changing makes the task even more difficult for small businesses.."
        }
        h1fourth={
          "‘88% of consumers trust online reviews as much as personal recommendations’"
        }
        pfourth={
          "Consumers look for specific types of information from local businesses before they make purchases. In addition to relevant product/service information, Bright Local found that nearly 9 out of 10 people use reviews and feedback to guide their purchase decisions – unsurprisingly, potential customers that see negative reviews about a business do not go on to make a purchase from them. It takes time and expertise to ensure that your business gets the right type of reviews from the places that consumers look at to encourage potential customers to buy from you. Another challenge for local businesses trying to drive traffic and generate sales are the types of incentives local consumers ‘expect’ if they are to become repeat customers. Businesses that offer the right incentives and rewards are more likely to get more people buying from them. Do you know the incentives that encourage local searchers to complete transactions? Few small businesses have experience of analyzing the rapidly developing metrics in local marketing. Without thorough analyses of the data, it is almost impossible to gain actionable insights with which to improve your campaign to get maximum return on investment."
        }
        h1fifth={"Local Marketing Service Package"}
        pfifth={
          "Our comprehensive local marketing package includes a thorough review of your existing local marketing activities and the development of a tailored local marketing strategy. We will set up your Google Business profile and establish a system for gathering reviews, which are crucial for building trust and attracting customers. Our team will create compelling content for your mobile website, optimizing both design and content for local and mobile SEO. We will also ensure that your business is listed in relevant online directories to increase visibility. Throughout the process, we will monitor effectiveness, make continuous improvements, and provide monthly performance reports. Take your local marketing to the next level and drive more customers to your business with our all-inclusive package. Contact us today to get started."
        }
        h1sixth={"Let's Get Started"}
        psixth={
          "Let's get started with our local marketing service packages today and unlock the full potential of your business in your local area. Whether you're looking to increase foot traffic to your physical store or drive more online conversions from local customers, our tailored packages have you covered. From conducting a thorough review of your current marketing activities to setting up your Google Business profile, optimizing your mobile website, and monitoring performance, we have the expertise and tools to enhance your local presence and attract more customers. Don't let your competitors take the lead in the local market. Contact us now and let's embark on a successful local marketing journey together."
        }
      />
      <ClientTestimonials />
      <FormMain />
    </>
  );
}

export default LocalMarketing;
