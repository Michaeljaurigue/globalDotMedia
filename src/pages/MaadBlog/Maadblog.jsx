import React, { useState, useEffect, useRef } from "react";
import blogsData from "../../blogs.json";
import "./Maadblog.css";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Maadblog = () => {
  const { blogs } = blogsData;
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const totalPages = Math.ceil(Object.keys(blogs).length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = Object.values(blogs).slice(startIndex, endIndex);
  const blogsRef = useRef(null);
  const isButtonClickedRef = useRef(false);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    isButtonClickedRef.current = true;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      isButtonClickedRef.current = true;
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      isButtonClickedRef.current = true;
    }
  };

  useEffect(() => {
    if (isButtonClickedRef.current) {
      const blogsElement = blogsRef.current;
      if (blogsElement) {
        const blogsOffsetTop = blogsElement.offsetTop;
        window.scrollTo({ top: blogsOffsetTop, behavior: "smooth" });
      }
      isButtonClickedRef.current = false;
    }
  }, [currentPage]);

  return (
    <section className="maadblog">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Maad Blog - Global.Media</title>
        <link rel="canonical" href="http://globaldotmedia.com/maad-blog/" />
        <meta
          name="Maad Blog"
          description="Discover insightful interviews with business owners and expert advice on marketing practices and business matters. Stay updated with the latest strategies to grow your business effectively. Explore the Maad Blog by Global.Media."
        />
      </Helmet>
      <HeroHeader
        h1={"Maad Blog"}
        h2={
          "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
        }
        link={"/images/market-research.jpg"}
      />
      <h1 ref={blogsRef} className="maadblog__header">
        Blog Posts
      </h1>
      <div className="maadblog__posts-container">
        {paginatedPosts.map((blog) => (
          <Link key={blog.id} to={blog.id} className="maadblog__post-card">
            <img
              className="maadblog__post-image"
              src={blog.image}
              alt={blog.title}
            />
            <h1 className="maadblog__post-title">{blog.h1}</h1>
            <p className="maadblog__post-description">{blog.description}</p>
          </Link>
        ))}
      </div>
      {/* //fixed the pagination and BEM */}
      <div className="maadblog__pagination">
        <button
          className="maadblog__pagination-button maadblog__pagination-button--previous"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              className={`maadblog__pagination-numbers ${
                pageNumber === currentPage
                  ? "maadblog__pagination-numbers--active"
                  : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          className="maadblog__pagination-button maadblog__pagination-button--next"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Maadblog;
