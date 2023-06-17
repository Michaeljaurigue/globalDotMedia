import React from "react";
// import "./Contact.css";
import HeroHeader from "../../components/HeroHeader/HeroHeader";

const Contact = () => {
  return (
    <div>
      <HeroHeader
        h1={"Global.Media"}
        h2={
          " We would really like to hear from you, so please call/text, send the form, or email us here."
        }
        p={
          "Call or text: 07599 527195. Post: Eden House, Forge Lane, Saltash, PL12 6LX"
        }
        link={"/images/content-marketing.jpg"}
      />
    </div>
  );
};

export default Contact;
