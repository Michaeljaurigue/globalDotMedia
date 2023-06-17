import "./FormGuide.css";
import { Button } from "../Button/Button";

function FormGuide() {
  return (
    <>
      <form className="form">
        <div className="form_container">
          <h2 className="form_title">Contact Us</h2>
          <fieldset className="form_fieldset">
            <input
              type="text"
              name="name"
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
              name="email"
              id="email"
              placeholder="Email"
              className="form_input"
              required
            />
          </fieldset>

          <fieldset className="form_fieldset">
            <textarea
              name="comment"
              id="comment"
              placeholder="Leave a comment"
              className="form_input"
              required
            ></textarea>
          </fieldset>

          <Button
            className="form_button"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}

export default FormGuide;
