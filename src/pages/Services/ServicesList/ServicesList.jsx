import React from "react";
import CardItem from "../../../components/CardItem/CardItem";
import "./ServicesList.css";


function ServicesList() {
 
  return (
    <div className="cards">
      <h1 className="card__title">Our Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/services-1.jpg"
              text="Social media has become an indispensable component in every business’ marketing mix. Customers expect businesses to have an active presence on facebook, Twitter, Pinterest, etc."
              label="Social Media Marketing"
              path="/our-services/social-media-marketing"
            />

            <CardItem
              src="/images/services-2.jpg"
              text="Content marketing in the form of useful, relevant information and resources for visitors, is an essential technique that gets websites higher up the search rankings,"
              label="Content Marketing"
              path="/our-services/content-marketing/"
            />

            <CardItem
              src="/images/services-3.jpg"
              text="Search Engine Optimization (SEO) is the way to get found through organic search – that is, being visible on search engine results pages. Getting your website to high up on the search engine results"
              label="Search Engine Optimization"
              path="/our-services/search-engine-optimization/"
            />
          </ul>
        </div>

        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/services-4.jpg"
              text="Email marketing is so much more than sending newsletters filled with pretty pictures and hype words, in the hope that they will motivate someone into action."
              label="Email Marketing"
              path="/our-services/email-marketing/"
            />

            <CardItem
              src="/images/services-5.jpg"
              text="Pay-Per-Click (PPC) is the fastest way to get visibility and consumers to your business. While Search Engine Optimisation (SEO) can take months and even years."
              label="Pay-Per-Click Marketing"
              path="/our-services/pay-per-click-marketing/"
            />

            <CardItem
              src="/images/services-6.jpg"
              text="People are actively using local search and directory listings to find local businesses. so if your businesses has a location local marketing is essential."
              label="Local Marketing"
              path="/our-services/local-marketing/"
            />
          </ul>
        </div>

        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/services-7.jpg"
              text="Running a business without a clear plan is like going on a journey without having a destination or idea about how you are going to get there."
              label="Marketing Research"
              path="/our-services/market-research/"
            />

            <CardItem
              src="/images/services-8.jpg"
              text="Experts have been predicting the massive impact of mobile technology on the way we live and work for many years. That mobile future is finally here!"
              label="Mobile Marketing"
              path="/our-services/mobile-marketing/"
            />

            <CardItem
              src="/images/services-9.jpg"
              text="Businesses use a mix of online & offline marketing to drive more traffic to their business & generate more sales. See how to get the right marketing mix."
              label="Offline Marketing"
              path="/our-services/offline-marketing-consultancy/"
            />
          </ul>
        </div>

        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/services-10.jpg"
              text="Video has become the most effective way to get your message to your ideal customers. However, video can not work for your business if people can’t find them."
              label="Video Marketing"
              path="/our-services/video-marketing/"
            />

            <CardItem
              src="/images/services-11.jpg"
              text="The web has become the most effective way to get your message to your ideal customers. However, web pages can not work for your business if people can’t find them."
              label="Web Design"
              path="/our-services/website-development/"
            />

            <CardItem
              src="/images/services-12.jpg"
              text="Being seen in mass media makes businesses visible and credible to potential clients. See how we get businesses on TV, radio, magazines, etc. so that they generate more sales"
              label="Creative media advertising"
              path="/our-services/creative-media-advertising/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
