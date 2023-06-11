import React from "react";
import CardItem from "../../../components/CardItem/CardItem";
import "./AdditionalServices.css";

function AdditionalServices() {
  return (
    <div className="cards">
      <h1 className="card__title">Additional Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/home-4.jpg"
              text="We source, design and send 2000 emails 4 times a month to your target market – we collect and verify target recipients based on industry, job title, and location. Choose your Email Marketing options "
              label="Targeted Email Marketing"
              path="https://globaldotmedia.com/our-services/email-marketing/"
            />
            <CardItem
              src="/images/home-5.jpg"
              text="Marketing App provides Trusted Partners Directory and 1-to-1  Marketing Training resources that puts your business in front of buyers 24/7/365. Download in App Stores HERE"
              label="Global Media App"
              path="https://play.google.com/store/apps/details?id=com.eaziapps.cms.android5faac55814c14"
            />
            <CardItem
              src="/images/home-6.jpg"
              text="Our accredited marketing courses are developed in partnership with the world-renowned Internet Business School. You can also choose our new 1 to 1 Digital Marketing Training."
              label="Marketing Training"
              path="https://globaldotmedia.com/digital-marketing-training/"
            />
            <CardItem
              src="/images/home-7.jpg"
              text="Our Book writing service works with aspiring authors to create their book, get published and market your new book. Choose  at Book Writing, Publishing & Marketing Services."
              label="Book Publishing and Marketing"
              path="https://globaldotmedia.com/book-publishing-and-marketing-service/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdditionalServices;
