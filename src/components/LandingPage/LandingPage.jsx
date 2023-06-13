import React from "react";
import "./LandingPage.css";

function LandingPage(props) {
  return (
    <>
      <div className="LandingPage__container_1">
        <h1 className="LandingPage__h1">{props.h1first}</h1>
        <p className="LandingPage__p">{props.pfirst}</p>
      </div>
      <div className="LandingPage__container_1">
        <h1 className="LandingPage__h1">{props.h1second}</h1>
        <p className="LandingPage__p">{props.psecond}</p>
      </div>
      <div className="LandingPage__container_1">
        <h1 className="LandingPage__h1">{props.h1third}</h1>
        <p className="LandingPage__p">{props.pthird}</p>
      </div>
      <div className="LandingPage__container_1">
        <h1 className="LandingPage__h1">{props.h1fourth}</h1>
        <p className="LandingPage__p">{props.pfourth}</p>
      </div>
      <div className="LandingPage__container_1">
        <h1 className="LandingPage__h1">{props.h1fifth}</h1>
        <p className="LandingPage__p">{props.pfifth}</p>
      </div>
      <div className="LandingPage__container_1">
        <h1 className="LandingPage__h1">{props.h1sixth}</h1>
        <p className="LandingPage__p">{props.psixth}</p>
      </div>
      <div className="LandingPage__container_1">
        <h1 className="LandingPage__h1">{props.h1seventh}</h1>
        <p className="LandingPage__p">{props.pseventh}</p>
      </div>
      <div className="LandingPage__container_1">
        <h1 className="LandingPage__h1">{props.h1eigth}</h1>
        <p className="LandingPage__p">{props.peigth}</p>
      </div>
      <div className="LandingPage__container_1">
        <h1 className="LandingPage__h1">{props.h1ninth}</h1>
        <p className="LandingPage__p">{props.pninth}</p>
      </div>
      <div className="LandingPage__container_1">
        <h1 className="LandingPage__h1">{props.h1tenth}</h1>
        <p className="LandingPage__p">{props.ptenth}</p>
      </div>
      <div className="LandingPage__container_1">
        <h1 className="LandingPage__h1">{props.h1eleventh}</h1>
        <p className="LandingPage__p">{props.peleventh}</p>
      </div>
    </>
  );
}

export default LandingPage;
