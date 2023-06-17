import "./FormMain.css";

function FormMain() {
  return (
    <div className="form__container">
      <form className="contact-form">
        <h2 className="form_title">Book Your Free Consultation</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <div className="form-group-row">
            <div className="form-group-item">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group-item">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-group">
          <div className="form-group-row">
            <div className="form-group-item">
              <label htmlFor="captcha">I'm not a robot:</label>
              <input type="text" id="captcha" name="captcha" required />
            </div>
            <div className="form-group-item">
              {/* Add your CAPTCHA component here */}
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormMain;
