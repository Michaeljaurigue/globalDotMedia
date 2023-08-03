import React from "react";
import "./LandingPage.css";

function LandingPage(props) {
  return (
    <>
      <div className="section">
        <h1 className="section__title">{props.h1first}</h1>
        <p className="section__text">{props.pfirst}</p>
      </div>
      <div className="section">
        <h1 className="section__title">{props.h1second}</h1>
        <p className="section__text">{props.psecond}</p>
      </div>
      <div className="section">
        <h1 className="section__title">{props.h1third}</h1>
        <p className="section__text">{props.pthird}</p>
      </div>
      <div className="section">
        <h1 className="section__title">{props.h1fourth}</h1>
        <p className="section__text">{props.pfourth}</p>
      </div>
      <div className="section">
        <h1 className="section__title">{props.h1fifth}</h1>
        <p className="section__text">{props.pfifth}</p>
      </div>
      <div className="section">
        <h1 className="section__title">{props.h1sixth}</h1>
        <p className="section__text">{props.psixth}</p>
      </div>
      <div className="section">
        <h1 className="section__title">{props.h1seventh}</h1>
        <p className="section__text">{props.pseventh}</p>
      </div>
      <div className="section">
        <h1 className="section__title">{props.h1eigth}</h1>
        <p className="section__text">{props.peigth}</p>
      </div>
      <div className="section">
        <h1 className="section__title">{props.h1ninth}</h1>
        <p className="section__text">{props.pninth}</p>
      </div>
      <div className="section">
        <h1 className="section__title">{props.h1tenth}</h1>
        <p className="section__text">{props.ptenth}</p>
      </div>
      <div className="section">
        <h1 className="section__title">{props.h1eleventh}</h1>
        <p className="section__text">{props.peleventh}</p>
      </div>
    </>
  );
}

export default LandingPage;
