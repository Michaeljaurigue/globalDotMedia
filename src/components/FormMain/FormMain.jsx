import React, { useState } from "react";
import "./FormMain.css";

function FormMain() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="form__container">
    
    <form className="contact-form" onSubmit={handleSubmit}>
    <h2 className="form_title">Book Your Free Consultation</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <div className="form-group-row">
          <div className="form-group-item">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-item">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
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
};

export default FormMain;
