import React from "react";
import "./ClientTestimonials.css";

function ClientTestimonials() {
  return (
    <div className="client_testimonials">
      <h1 className="client_testimonials__title">Client Testimonials</h1>
      <div className="client_testimonials__container">
        <div className="client_testimonials__column">
          <iframe
            width="560"
            height="315"
            className="client_testimonials__video"
            src="https://www.youtube.com/embed/_2GlvjuaBoo"
            title="Testimonial 1"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="client_testimonials__column">
          <iframe
            width="560"
            height="315"
            className="client_testimonials__video"
            src="https://www.youtube.com/embed/zphArpt5T9Q"
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
