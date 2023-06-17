import React, { useState, useEffect } from "react";
import podcastsData from "../../podcasts.json";
import "./BusinessPodcasts.css";
import HeroHeader from "../../components/HeroHeader/HeroHeader";

const Podcast = () => {
  const { podcasts } = podcastsData;
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(Object.keys(podcasts).length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPodcasts = Object.values(podcasts).slice(startIndex, endIndex);

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
        h1={"Podcast"}
        h2={
          "Welcome to Global.Media's Business Podcast page. We have a wide range of podcasts for you to listen to."
        }
        link={"/images/content-marketing.jpg"}
      />
      <h1 className="podcast-posts-h1">Podcasts</h1>
      <h2 className="podcast-posts-h2">
        Welcome to Global.Media's Business Podcast page
      </h2>
      <div className="podcast-posts-container">
        {paginatedPodcasts.map((podcast) => (
          <a
            key={podcast.id}
            href={podcast.url}
            target="_blank"
            rel="noopener noreferrer"
            className="podcast-card"
          >
            <img src={podcast.image} alt={podcast.title} />
            <h1>{podcast.h1}</h1>
            <p>{podcast.description}</p>
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

export default Podcast;
