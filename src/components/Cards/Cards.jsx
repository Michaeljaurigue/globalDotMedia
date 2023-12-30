import React from "react";
import "./Cards.css";
import CardItem from "../CardItem/CardItem";

function Cards(props) {
  return (
    <div className="cards">
      <h1 className="cards__title">{props.h1}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={props.src1}
              text={props.text1}
              label={props.label1}
              path={props.path1}
            />
            <CardItem
              src={props.src2}
              text={props.text2}
              label={props.label2}
              path={props.path2}
            />
            <CardItem
              src={props.src3}
              text={props.text3}
              label={props.label3}
              path={props.path3}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

// cards 

export default Cards;
