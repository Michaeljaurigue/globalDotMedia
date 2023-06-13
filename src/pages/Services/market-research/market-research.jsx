import React from "react";
import HeroHeader from "../../../components/HeroHeader/HeroHeader";
import ClientTestimonials from "../../../components/ClientTestimonials/ClientTestimonials";
import FormMain from "../../../components/FormMain/FormMain";
import LandingPage from "../../../components/LandingPage/LandingPage";

function MarketResearch() {
  return (
    <>
      <HeroHeader
        h1={"Market Research Service"}
        h2={"Global.Media is a full-service digital marketing agency."}
        p={"How well do you know your Market? We can help you find out."}
        link={"/images/market-research.jpg"}
      />

      <LandingPage
        h1first={"The Marketing Journey"}
        pfirst={
          "Running a business without a clear plan is like going on a journey without having a destination or idea about how you are going to get there. Before you start your business, our market research service will help you to know about your business sector and fine-tune your business idea. With these, you will be able to develop the unique business strategy for your road to success. You will want to fully understand everything there is to know about what your business will do, how your business will work, etc. Gaining insight into the wants and habits of your target customers helps you target the right market and allows you to differentiate from competitors by focusing on more precise profitable avenues. It is also vital to have an overview of your main competitors’ strong points and areas that can be improved. Competitors’ weaknesses present gaps in the market that you can exploit. When all of these are combined with clearly identifying your target customers’ unmet needs, you can develop the ideal business to fill the gaps in the market – this is the recipe for successful businesses."
        }
        h1second={"Market Research Service Costs?"}
        psecond={
          "No two businesses are the same. Furthermore, your business idea is unique, so there is no standard price on the market research that is right for you. The cost of the service for each client on the scope of research that you want us to do, the level of detail you require and the timescale for delivery for the report. This information will enable us to agree the number of days to assign to your project, based on our standard fee of £125.00 per day (plus 3rd party costs for services/products such as industry sector reports). We will invoice you for a deposit (50% of the agreed) and 3rd party costs before we start work on your project. The remainder of our fees will be payable on completion of your research assignment."
        }
        h1third={
          "What We Do For You"
        }
        pthird={
          "Our market research service will deliver these elements: Consultation meeting to fully understand your business, agree the scope and budget for the market research you want us to carry out. Strength, Weaknesses, Opportunities and Threats (SWOT) analysis of your business, with recommendations you can build on. Political, Economic, Social, Technological, Environmental and Legal (PESTEL) Analysis for your business with recommendations for you to consider. 7P analysis for your business with recommendations for you to consider. Trends in your business sector. Background, products/services and digital marketing activities of 3 competitors. Propose digital marketing activities for your business with potential reach and costs. Market research report in the format you want. Debrief meeting to help you to understand the contents of the market research report. Contact us today to take advantage of our market research service and unlock the potential of your business."
        }
        h1fourth={
          ""
        }
        pfourth={
          ""
        }
        h1fifth={""}
        pfifth={
          ""
        }
        h1sixth={""}
        psixth={
          ""
        }
      />
      <ClientTestimonials />
      <FormMain />
    </>
  );
}

export default MarketResearch;
