import React from "react";
import HeroHeader from "../../../components/HeroHeader/HeroHeader";
import ClientTestimonials from "../../../components/ClientTestimonials/ClientTestimonials";
import FormMain from "../../../components/FormMain/FormMain";
import LandingPage from "../../../components/LandingPage/LandingPage";
import BulletPointChart from "../../../components/ServicePackageChart/ServicePackageChart";

function OfflineMarketingConsultancy() {
  return (
    <>
      <HeroHeader
        h1={"Offline Marketing Consultancy"}
        h2={"Global.Media is a full-service digital marketing agency."}
        p={
          "We offer a range of services to help your business grow including offline marketing consultancy."
        }
        link={"/images/offline-marketing-consultancy.jpg"}
      />

      <LandingPage
        h1first={"Offline Matters Too"}
        pfirst={
          "Many businesses use a mix of online and offline marketing techniques to drive more traffic to their business and generate more sales. The Internet does not change the fact that businesses have been successfully selling offline for years. It is worth remembering that while more people are searching and buying online, not everyone has an Internet connection. Furthermore many people are not Internet-savvy and many businesses have been doing offline marketing for many years."
        }
        h1second={"Does Traditional Marketing Still Work?"}
        psecond={
          "Let's examine the evidence that proves traditional marketing is still alive and often thriving by looking at advocates for the different techniques available. Television advertising remains the Holy Grail for businesses who want to be famous and the resulting catapult in their sales, online or offline. On average, over the first 28 days of advertising on TV, brands can expect a 5% sales increase. Many satellite channels that have highly targeted audiences and smaller businesses advertising can record significantly higher figures. Almost all of the online giants, from Amazon to Airbnb, benefit from spending millions on the major television channels. Radio advertising continues to give businesses great visibility and exposure that translates into sales. AM/FM radio is still the most cost-effective, top-reach advertising medium today. Perhaps as a direct result of the frequent plays of your ad to a sizeable number of local listeners that radio ads can reach, people who have a need that your business can resolve are likely to knock on your door. Print advertising – there are still thousands of publications that are based on advertising revenues. Even in the age of smartphones and the Internet, your potential customers are still paying attention to the printed word, and you can boost your sales by advertising in magazines and newspapers. Whether they are local, regional, or national, or generic or niche, businesses are sending their money and getting good sales results every day in magazines, newspapers, and publications. Direct mail – I bet you still get marketing through the mail. From brochures to leaflets to gifts, plenty of businesses still post information about their services and offers to potential clients by mail. Direct mail campaigns give a high ROI and even a higher ROI than paid ads. While many people are likely to throw the marketing that they are not interested in into the bin, clearly businesses make sufficient returns to make the industry thrive in the UK at least. Other offline marketing methods worth thinking about include location-based billboards and merchandising. As is clear, the old marketing strategies definitely have a place even in today's digital marketplace."
        }
        h1third={"Getting Famous on TV"}
        pthird={
          "All well-known online brands have invested heavily in TV advertising. Today, television advertising, perhaps the most well-known and effective offline marketing method, works in terms of achieving mass awareness about businesses quickly. For online brands looking to increase their sales and customer base, television is the main source of driving traffic to their business. The main prize from media advertising is becoming famous and instantly in front of consumers' minds for a product or service. Businesses also save on online paid search budgets. Similarly, methods like direct mail are major sources of leads and sales for businesses, especially when marketing materials are professionally designed and systematically distributed through targeted mailing lists. Businesses can use a wide range of offline marketing techniques to market their products and services, many of which are relatively inexpensive to implement, with professional services and support from several well-established marketing agencies available to call on. Which offline marketing mediums will work for your business? Many businesses do not know the offline marketing options that are available. Other areas that many small businesses within traditional marketing include not having the expertise to design and launch offline campaigns effectively."
        }
        h1fourth={"Challenges of Doing Offline Marketing"}
        pfourth={
          "Businesses come to us for help with their traditional marketing largely because they don't know how to get their campaign off the ground. These are the typical issues they experience: They don't know if offline marketing will achieve their business objectives. They don't know which strategies will work. They don't have the talent and resources in-house to design and manage the campaigns. They don't have relationships with media agencies and companies that they need to buy advertising spaces from. They don't have the time to manage the offline marketing campaign, especially where several partners and suppliers are involved in the campaign. We can work with you to overcome these challenges if any or all of them sound familiar."
        }
        h1fifth={"Getting Started"}
        pfifth={
          "The traditional marketing consultancy service starts with a meeting to discuss your project requirements, including goals, budget, timescale, and resources. We will then agree on the scope of the research we will carry out for your business and the format for the report you want. Our offline consultancy service will include us identifying agencies and service providers who can implement your marketing campaign and establishing their processes, requirements, and timescales. You will get a comprehensive plan to deliver your campaign that clearly states activities, outcomes, timescales, and who has responsibilities. When you agree on an offline marketing plan, we will take the lead if you want us to and manage the communication and liaison with partners and suppliers to design and deliver your campaign. The costs of the project will depend on the number of days we agree for the project."
        }
        h1sixth={""}
        psixth={""}
        h1seventh={""}
        pseventh={""}
        h1eighth={""}
        peighth={""}
        h1ninth={""}
        pninth={" "}
        h1tenth={""}
        ptenth={""}
        h1eleventh={"Mobile Marketing Service Package"}
        peleventh={
          <BulletPointChart
            packageName={"Traditional Marketing Consultancy Package"}
            one={
              "We work with businesses to understand and access the full range of offline marketing options they can use to gain an advantage over their competitors."
            }
            two={"Offline marketing options for your business."}
            three={
              "Potential numbers of people that you can reach with each marketing option."
            }
            four={
              "Costs of designing and launching traditional marketing campaigns."
            }
            five={
              "Companies that can help you with your campaign and the costs of their services. Our service will help your business to identify."
            }
            six={
              "Integrate your offline and online marketing activities. This enables potential customers to get consistent messages from your marketing campaigns."
            }
            seven={"Review and optimise offline marketing campaigns."}
            eight={
              "Support to identify and implement Conversion Rate Optimisation strategies."
            }
            nine={"Analytics and reporting as appropriate."}
          />
        }
      />
      <ClientTestimonials />
      <FormMain />
    </>
  );
}

export default OfflineMarketingConsultancy;
