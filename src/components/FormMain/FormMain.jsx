import "./FormMain.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function FormMain() {
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
    <div className="form-main__container">
      <form className="form-main" ref={form} onSubmit={sendEmail}>
        <h2 className="form-main__title">Book Your Free Consultation</h2>
        {messageSent ? (
          <p className="form-main__message">Your message was sent!</p>
        ) : (
          <>
            <div className="form-main__group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="from_name" required />
            </div>
            <div className="form-main__group">
              <div className="form-main__group-row">
                <div className="form-main__group-item">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="user_email" required />
                </div>
                <div className="form-main__group-item">
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>
            </div>
            <div className="form-main__group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="form-main__group">
              {/* <div className="form-main__group-row">
                <div className="form-main__group-item">
                  <label htmlFor="captcha">I'm not a robot:</label>
                  <input type="text" id="captcha" name="captcha" required />
                </div>
                <div className="form-main__group-item">
                  Add your CAPTCHA component here
                </div>
              </div> */}
            </div>
            <input className="form-main__button" type="submit" value="Send" />
          </>
        )}
      </form>
    </div>
  );
}

export default FormMain;
