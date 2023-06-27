import React, { useState, useEffect, useRef } from "react";
import testimonialsData from "../../testimonials.json";
import "./Testimonials.css";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import { Helmet } from "react-helmet";

const Testimonials = () => {
  const { testimonials } = testimonialsData;
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(
    Object.keys(testimonials).length / testimonialsPerPage
  );
  const startIndex = (currentPage - 1) * testimonialsPerPage;
  const endIndex = startIndex + testimonialsPerPage;
  const paginatedTestimonials = Object.values(testimonials).slice(
    startIndex,
    endIndex
  );

  const testimonialsRef = useRef(null);
  const isButtonClickedRef = useRef(false);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    isButtonClickedRef.current = true;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (isButtonClickedRef.current) {
    const testimonialsElement = testimonialsRef.current;
    if (testimonialsElement) {
      const testimonialsOffsetTop = testimonialsElement.offsetTop;
      window.scrollTo({ top: testimonialsOffsetTop, behavior: "smooth" });
    }
    isButtonClickedRef.current = false;
  }
  }, [currentPage]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Testimonials - Global.Media</title>
        <link rel="canonical" href="http://globaldotmedia.com/testimonials" />
      </Helmet>
      <HeroHeader
        h1={"Testimonials"}
        h2={
          "We are very proud of the service we provide and stand by every product we carry. Scroll down to read our testimonials from our happy customers."
        }
        link={"/images/testimonials.jpg"}
      />
      <h1 ref={testimonialsRef} className="testimonials-h1">Testimonials</h1>
      <div  className="testimonials-container">
        {paginatedTestimonials.map((testimonial, index) => (
          <div key={`testimonial${index + 1}`} className="testimonial">
            <h3>{testimonial.quote}</h3>
            <p>{testimonial.date}</p>
            <p>{testimonial.comment}</p>
            <p>{testimonial.author}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              className={`pagination-button ${
                pageNumber === currentPage ? "active" : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
