import emailjs from "emailjs-com";
import React, { useRef } from "react";

export const sendEmail = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_HEADER_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    emailjs
      .sendForm(
        serviceId, //service ID
        templateId, //template ID
        form.current, //form ID
        publicKey //public key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return null;
};
