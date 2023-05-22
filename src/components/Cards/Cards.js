import React from "react";
import CardItem from "../../CardItem/CardItem";
import "./Projects.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/se_project_aroundtheus.jpg"
              text="React | API | Node.js | Git :  Allows users to add and delete cards, customize profile picture, and change the name of the user. Click the image to see the live site!"
              label="Around the US"
              path="https://github.com/Michaeljaurigue/se_project_aroundtheus"
            />
            <CardItem
              src="images/se_project_wtwr_react.jpg"
              text="React | API | Express | MongoDB | Node.js | Git : This app uses API to recommend an outfit based on the weather. Click the image to see the live site!"
              label="WTWR Weather Outfit App"
              path="https://michaeljaurigue.github.io/se_project_react/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/se_project_coffeeshop.jpg"
              text="HTML | CSS | JavaScript | Git : Coffeeshop landing page for a fictional company. Click the image to see the live site!"
              label="Practicum CoffeeShop"
              path="https://michaeljaurigue.github.io/se_project_coffeeshop/"
            />
            <CardItem
              src="images/se_project_library.jpg"
              text="HTML | CSS : A simple landng page for a fictional company. Click the image to see the live site!"
              label="SE Project Library"
              path="https://michaeljaurigue.github.io/se_project_library/"
            />
            <CardItem
              src="images/mj_nachicago.jpg"
              text="React | API | Express | MongoDB | Node.js | Git : Currently redeveloping this website. Visit the website to see the current version!"
              label="New Acropolis Chicago Website"
              path="https://www.nachicago.org/"
            />
            <CardItem
              src="images/mj_globaldotmedia.jpg"
              text="React | API | Express | MongoDB | Node.js | Git : Currently redeveloping this website. Visit the website to see the current version!"
              label="Global Dot Media Website"
              path="https://globaldotmedia.com/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;