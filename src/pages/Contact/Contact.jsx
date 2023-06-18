import React from "react";
// import "./Contact.css";
import { Helmet } from "react-helmet";
import FormMain from "../../components/FormMain/FormMain";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact - Global.Media</title>
        <link rel="canonical" href="http://globaldotmedia.com/contact/" />
        <meta
          name="description"
          content="Contact Global.Media. We would really like to hear from you, so please call or text, send the form, or email us today!"
        />
      </Helmet>

      {/* <HeroHeader
        h1={"Global.Media"}
        h2={
          " We would really like to hear from you, so please call/text, send the form, or email us here."
        }
        p={
          "Call or text: 07599 527195. Post: Eden House, Forge Lane, Saltash, PL12 6LX"
        }
        link={"/images/content-marketing.jpg"}
      /> */}
      <h1 className="contact-h1">Contact</h1>
      <h2 className="contact-h2">
        We would really like to hear from you, so please call/text, send the
        form, or email us here.
      </h2>
      <h3 className="contact-h3">
        Call or text: 07599 527195. Post: Eden House, Forge Lane, Saltash, PL12
        6LX
      </h3>
      <FormMain />
    </div>
  );
};

export default Contact;
