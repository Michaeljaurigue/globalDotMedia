import React from "react";
import "./Cards.css";
import CardItem from "../CardItem/CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/public/images/home-1.jpg"
              text="Get a modern website that is specifically designed to turn prospects into customers"
              label=""
              path="https://globaldotmedia.com/contact-us-2/"
            />
            <CardItem
              src="images/se_project_wtwr_react.jpg"
              text="Get fresh posts daily to keep your social media accounts buzzing with excitement"
              label=""
              path="https://globaldotmedia.com/contact-us-2/"
            />
            <CardItem
              src="images/se_project_wtwr_react.jpg"
              text="Attract new leads with fully managed Facebook advertising or Google Ads."
              label="WTWR Weather Outfit App"
              path="https://globaldotmedia.com/contact-us-2/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
