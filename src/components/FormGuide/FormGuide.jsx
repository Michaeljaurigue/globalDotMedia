import "./FormGuide.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function FormGuide() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p2vme9v", //service ID
        "template_rbrsg7j", //template ID
        form.current, //form ID
        "eOAE3Sm7wN_Zd8yAQ" //public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true); // Set the messageSent state to true
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form_container">
          <h2 className="form_title">Contact Us</h2>
          {messageSent ? (
            <p className="form_message">Your message was sent!</p>
          ) : (
            <>
              <fieldset className="form_fieldset">
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  placeholder="Name"
                  className="form_input"
                  required
                  minLength="2"
                  maxLength="30"
                />
              </fieldset>

              <fieldset className="form_fieldset">
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="Email"
                  className="form_input"
                  required
                />
              </fieldset>

              <fieldset className="form_fieldset">
                <textarea
                  name="message"
                  id="comment"
                  placeholder="Send a Message"
                  className="form_input"
                  required
                ></textarea>
              </fieldset>

              <input
                className="form_button"
                buttonstyle="btn--primary"
                buttonsize="btn--large"
                type="submit"
                value="Send"
              />
            </>
          )}
        </div>
      </form>
    </>
  );
}

export default FormGuide;
