import React, { useState, useEffect } from "react";
import "./TestimonialSlider.css";

const testimonials = [
  {
    quote:
      "I am thinking of the 1 hour coach call with you route to get clarity and to ascertain whether now is the right time to write the book.  My only apprehension is I think that I will feel better once Pain to Purpose is out.  Anyway, I have no doubt that after my coach call with you that clarity will come. Love and thanks",
    author: "Rose",
    designation: "Author, Pain to Purpose",
  },
  {
    quote:
      "I was totally blown away by our two hour session. Almost immediately I gained clarity. Wonderful to have the recording which I have listened to several times, recapping the actions needed and my commitment to see these through. I feel different, this time I have to take action and having an accountability partner with all my sessions booked in for the next 6 months is just amazing. This gives me so much certainty and reassurance that I have made the next decision. I am so excited for the next year ahead and beyond.",
    author: "Darren Winters",
    designation: "CEO",
  },
  {
    quote:
      "Ava is a game changer, a mighty life warrior, a phenomenal speaker and a woman with heart and vision. She has passion and compassion for changing people’s lives and she’s doing it all over the planet.",
    author: "John Ferris",
    designation:
      "REGIONAL ECOSYSTEM MANAGER AND MEMBER OF REGIONAL BOARD AT ULSTER BANK NORTHERN IRELAND",
  },
];
const TestimonSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="testimon-container">
      {testimonials.map((testimonial, index) => (
        <div
          className={`testimon ${index === current ? "active" : ""}`}
          key={index}
        >
          <p className="testimon-quote">{testimonial.quote}</p>
          <div className="testimon-author">
            <span className="testimon-icon">👤</span>
            <h4>{testimonial.author}</h4>
          </div>
          <h5 className="testimon-designation">{testimonial.designation}</h5>
        </div>
      ))}
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonSlider;
