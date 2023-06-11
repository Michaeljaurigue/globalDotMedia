import React from "react";
import "./FormGuide.css";

function FormGuide() {
  return (
    <>
      <form className="form">
        <div className="form_container">
          <h2 className="form_title">Book Your Free Consultation</h2>
          <fieldset className="form_fieldset">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="form_input"
              required
              mix-length="2"
              max-length="30"
            />
          </fieldset>

          <fieldset className="form_fieldset">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form_input"
              required
            />
          </fieldset>

          <button className="form_button" type="Submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default FormGuide;
