import React, { useState, useEffect } from "react";
import blogsData from "../../blogs.json";
import "./Maadblog.css";
import HeroHeader from "../../components/HeroHeader/HeroHeader";

const Maadblog = () => {
  const { blogs } = blogsData;
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(Object.keys(blogs).length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = Object.values(blogs).slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div>
      <HeroHeader
        h1={"Maad Blog"}
        h2={
          "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
        }
        link={"/images/market-research.jpg"}
      />
      <h1 className="blog-posts-h1">Blog Posts</h1>
      <div className="blog-posts-container">
        {paginatedPosts.map((blog) => (
          <a
            key={blog.id}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
          >
            <img src={blog.image} alt={blog.title} />
            <h1>{blog.h1}</h1>
            <p>{blog.description}</p>
          </a>
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

export default Maadblog;

// import React from "react";
// import { motion, useAnimation } from "framer-motion";

// import { useInView } from "react-intersection-observer";

// import { useEffect } from "react";
// import "../../App/App.css";
// import "./Maadblog.css";

// import Cards from "../../components/Cards/Cards";

// function MaadBlog() {
//   return (
//     <div>
//       <div className="maadblog-container">
//         <Cards
//           h1={"Maad Blog"}
//           src1={"/images/services-1.jpg"}
//           text1={
//             "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
//           }
//           label1={"Eny talks with Lydia on The Joyful Path Podcast"}
//           path1={"/eny-talks-on-the-joyful-path-podcast-with-lydia/"}
//           src2={"/images/services-2.jpg"}
//           text2={
//             "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
//           }
//           label2={"Facebook Ads"}
//           path2={"/blog/how-to-get-more-customers-with-facebook-ads"}
//           src3={"/images/services-3.jpg"}
//           text3={
//             "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
//           }
//           label3={"SEO"}
//           path3={"/blog/how-to-get-more-customers-with-seo"}
//         />
//         <Cards
//           src1={"/images/services-4.jpg"}
//           text1={
//             "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
//           }
//           label1={"Google Ads"}
//           path1={"/blog/how-to-get-more-customers-with-google-ads"}
//           src2={"/images/services-5.jpg"}
//           text2={
//             "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
//           }
//           label2={"Facebook Ads"}
//           path2={"/blog/how-to-get-more-customers-with-facebook-ads"}
//           src3={"/images/services-6.jpg"}
//           text3={
//             "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
//           }
//           label3={"SEO"}
//           path3={"/blog/how-to-get-more-customers-with-seo"}
//         />
//         <Cards
//           src1={"/images/services-4.jpg"}
//           text1={
//             "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
//           }
//           label1={"Google Ads"}
//           path1={"/blog/how-to-get-more-customers-with-google-ads"}
//           src2={"/images/services-5.jpg"}
//           text2={
//             "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
//           }
//           label2={"Facebook Ads"}
//           path2={"/blog/how-to-get-more-customers-with-facebook-ads"}
//           src3={"/images/services-6.jpg"}
//           text3={
//             "As a business owner and human being, I strive to achieve my goals. At the same time, I fulfil my duty to inspire other entrepreneurs and people who are thinking of starting their own businesses to dare to dream about taking their venture onto a global level."
//           }
//           label3={"SEO"}
//           path3={"/blog/how-to-get-more-customers-with-seo"}
//         />
//       </div>
//     </div>
//   );
// }

// export default MaadBlog;
