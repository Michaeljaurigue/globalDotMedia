import React from "react";
import { Helmet } from "react-helmet";
import FormMain from "../../components/FormMain/FormMain";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact - Global.Media</title>
        <link rel="canonical" href="http://globaldotmedia.com/contact/" />
        <meta
          name="description"
          content="Contact Global.Media. We would really like to hear from you, so please call or text, send the form, or email us today!"
        />
      </Helmet>

      <h1 className="contact__title">Contact</h1>
      <h2 className="contact__subtitle">
        We would really like to hear from you, so please call/text, send the
        form, or email us here.
      </h2>
      <h3 className="contact__info">
        Call or text: 07599 527195. Post: Eden House, Forge Lane, Saltash, PL12
        6LX
      </h3>
      <FormMain />
    </section>
  );
};

export default Contact;
