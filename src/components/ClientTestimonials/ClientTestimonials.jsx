import React from "react";
import "./ClientTestimonials.css";

function ClientTestimonials(props) {
  return (
    <div className="client_testimonials">
      <h1 className="client_testimonials-h1">Client Testimonials</h1>
      <div className="client_testimonials-container">
        <div className="client_testimonials-column">
          <iframe
            width="560"
            height="315"
            className="client_testimonials-video"
            src={props.link1}
            title="Testimonial 1"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="client_testimonials-column">
          <iframe
            width="560"
            height="315"
            className="client_testimonials-video"
            src={props.link2}
            title="Testimonial 2"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonials;
