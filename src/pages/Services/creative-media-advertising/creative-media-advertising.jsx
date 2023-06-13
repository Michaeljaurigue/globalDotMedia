import React from "react";
import HeroHeader from "../../../components/HeroHeader/HeroHeader";
import ClientTestimonials from "../../../components/ClientTestimonials/ClientTestimonials";
import FormMain from "../../../components/FormMain/FormMain";
import Cards from "../../../components/Cards/Cards";
import LandingPage from "../../../components/LandingPage/LandingPage";

function CreativeMediaAdvertising() {
  return (
    <>
      <HeroHeader
        h1={"Creative Media Advertising"}
        h2={"Global.Media is a full-service digital marketing agency."}
        p={
          "We help businesses grow, launch products, and build enduring relationships with their communities."
        }
        link={"/images/creative-media-advertising.jpg"}
      />
      <LandingPage
        h1first={"What's Creative Media Advertising?"}
        pfirst={
          "Businesses use a mix of online and offline marketing techniques to drive more traffic to their business and generate more sales. The Internet does not change the fact that businesses have been successfully marketing using traditional techniques for many years. We are a unique agency who have access to leading media platforms including television, radio, publications and location-based advertising spaces. Read on to see why every business should consider mass media advertising and digital marketing techniques in your marketing mix, as well as how we can help."
        }
        h1second={"Media Advertising"}
        psecond={
          "‘All well-known online brands have invested heavily in TV advertising.’ Today, television advertising is still the most effective medium in terms of achieving mass awareness about businesses. For major online brands looking to launch a product or service, take awareness of their brand to the next level, and increase their sales and customer base, mass media advertising is the main source for driving traffic to their business. While more people are searching and buying online year on year, businesses gain an immediate uplift in credibility and trust when they are seen on trusted networks and publications. The golden prize from media advertising is becoming famous, recognizable, and instantly front of consumers’ minds for the product or service you provide. Businesses also save on online paid search budgets. Lifestyle, entertainment, news, professional, regional, and local publications bring significant results for most companies. Reasons for this include the fact that people like having a physical copy of something that they can take away and digest, and printed media has a personal feel. Similarly, methods like direct mail are major sources of leads and sales for businesses, especially when marketing materials are professionally designed and systematically distributed through targeted mailing lists. Most consumers trust traditional advertising as the Marketing Charts data below shows: Ads on TV: 62%, Ads in newspapers: 61%, Ads on Radio: 57%, Billboards and outdoor media ads: 57%. For effective and impactful advertising, trust our expertise in television and traditional media advertising. Contact us now to discuss how we can help you reach your target audience and achieve remarkable brand awareness and business growth."
        }
        h1third={"Direct Mail"}
        pthird={
          "Direct mail includes flyers, letters, posters, and cards containing information advertising products or services that are either sent or given to people. According to the Direct Marketing Association (DMA), 79% of recipients act on direct mail immediately, compared to only 45% who say they deal with email right away. Just under half of the people visit the business' website, and more than a third go on to search for the business online. Over a quarter of consumers keep the information for use at a later date. Studies have shown that direct mail has a significant influence on purchasing decisions. Older consumers (aged 50-68) reported that direct mail influenced them to purchase a product or service, and the 18-34 year-old age group prefers finding out about products and services through direct mail, according to Forbes. Direct mail also yields high return on investment, with Target Marketing Magazine finding it to be the highest scoring form of marketing for Business-to-Consumer and Business-to-Business. With response rates from direct mail as high as 6.5% compared to around 0.12% for typical email marketing campaigns, it is clear that direct mail is still a powerful advertising tool. More than half of all business sectors continue to use direct mail to generate leads and acquire customers, as reported by Bestmailing. Additionally, the cost of digitally printed mailings has fallen by 25% over the past five years, making direct mail more affordable than ever. By utilizing a wide range of media advertising, including direct mail, businesses can effectively reach their target audience. Many of these advertising methods are relatively inexpensive to implement. While your competition may overlook the immense potential of mass media marketing, it is important for your business to consider the full benefits it can offer. Take advantage of the power of direct mail and other media advertising strategies. Contact us now to explore how we can help your business reach new heights and achieve remarkable results."
        }
        h1fourth={"Getting Started"}
        pfourth={
          "Our creative media advertising service starts with a consultation meeting to discuss your project requirements, including goals, budget, timescale, and resources. We then develop an advertising and marketing strategy that will work for your business. A key part of our traditional marketing consultancy service is ensuring that your offline and online marketing activities are integrated, enabling potential customers to receive consistent messages from your marketing campaigns."
        }
        h1fifth={"Creative Media Advertising Package"}
        pfifth={
          "We all get so many emails every day. Take a moment to think about how many of these you delete and how many you actually open and read. In reality, we delete most emails we get. One of the reasons for deleting emails without a second thought is the subject line. Unless the subject line grabs our attention and captures our interest, the email goes into the trash. If people don't open your emails, there is virtually no chance that they will perform the action you want. We know how to create attention-grabbing subject lines that increase the likelihood of emails getting opened. This makes them more likely to engage with your emails and move further down the purchasing funnel. After the subject line, crafting the right email for the occasion is the next priority. Using the right structure, tone, call to action, and incentives requires skill to do properly. Otherwise, you risk losing the recipient to a competitor rather than getting a transaction. Sending emails at the right time is important to get the desired response. We can research your business sector and visitors to establish the best day and time to send your emails to have the greatest chance of getting people to read and engage with them. Every marketing activity has to be monitored using appropriate metrics because this is the best basis to make changes to make the medium more effective. We have experience analyzing email marketing metrics to identify what is working and make improvements where needed to increase your return on investment."
        }
        h1sixth={"Email Marketing Service Package"}
        psixth={
          "We have the creative vision and team to take your media advertising campaign from concept through delivery. Our services include planning a bespoke advertising and marketing strategy, preparing for your advertising by sourcing the right advertising platforms to reach your audience (including TV, radio, magazines, direct-mail, and location-based platforms as appropriate), producing creative assets (videos, images, and copy) for your campaign(s), previewing your campaign with a representative sample group of your target audience, publishing your campaign, and monitoring progress to ensure your campaign is on track and optimized to achieve your objectives."
        }
      />
      <ClientTestimonials />
      <FormMain />
    </>
  );
}

export default CreativeMediaAdvertising;
