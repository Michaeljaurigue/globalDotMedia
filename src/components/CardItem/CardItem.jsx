import React from "react";
import "./CardItem.css";

function CardItem(props) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <li className="cards__item">
      <a className="cards__item__link" href={props.path} onClick={handleClick}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img src={props.src} alt="Project" className="cards__item__img" />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </a>
    </li>
  );
}

export default CardItem;
