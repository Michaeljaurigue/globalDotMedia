import React, { useState, useEffect } from "react";
import blogsData from "../../blogs.json";
import "./RelatedBlogPosts.css";
import { Link } from "react-router-dom";
import useScrollToTop from "../../utils/useScrollToTop";

const RelatedBlogPosts = () => {
  useScrollToTop();
  const [recommendations, setRecommendations] = useState([]);

  // Generate three random blog post recommendations
  const generateRecommendations = () => {
    const blogIds = Object.keys(blogsData.blogs);
    const recommendations = [];

    while (recommendations.length < 3) {
      const randomIndex = Math.floor(Math.random() * blogIds.length);
      const randomId = blogIds[randomIndex];

      // Exclude the current recommendation and any duplicates
      if (!recommendations.includes(randomId)) {
        recommendations.push(randomId);
      }
    }

    setRecommendations(recommendations);
  };

  // Initial generation of recommendations on component mount
  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div className="recommendation">
      <h1 className="recommendation__title">Recommended Blog Posts</h1>
      <div className="recommendation__row">
        {recommendations.map((id) => {
          const blog = blogsData.blogs[id];
          return (
            <div key={id} className="recommendation__card">
              <h2 className="recommendation__card-title">{blog.title}</h2>
              <img
                className="recommendation__card-image"
                src={blog.image}
                alt={blog.title}
              />
              <div className="recommendation__card-link-wrapper">
                <Link className="recommendation__card-link" to={blog.id}>
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="recommendation__button-container">
        <button
          className="recommendation__button"
          onClick={generateRecommendations}
        >
          Generate More Recommendations
        </button>
      </div>
    </div>
  );
};

export default RelatedBlogPosts;
