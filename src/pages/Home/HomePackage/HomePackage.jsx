import React from "react";
import CardItem from "../../../components/CardItem/CardItem";
import "./HomePackage.css";

function HomePackage() {
  return (
    <section className="home-package">
      <div className="home-package__title">Included in the Package</div>
      <div className="home-package__container">
        <div className="home-package__wrapper">
          <ul className="home-package__items">
            <CardItem
              src="/images/home-1.jpg"
              text="Get a modern website that is specifically designed to turn prospects into customers"
              label=""
              path="/contact/"
            />

            <CardItem
              src="/images/home-2.jpg"
              text="Get fresh posts daily to keep your social media accounts buzzing with excitement"
              label=""
              path="/contact/"
            />

            <CardItem
              src="/images/home-3.jpg"
              text="Attract new leads with fully managed Facebook advertising or Google Ads."
              label=""
              path="/contact/"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomePackage;
