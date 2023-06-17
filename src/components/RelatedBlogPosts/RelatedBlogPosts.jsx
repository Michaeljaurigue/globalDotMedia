import React, { useState, useEffect } from "react";
import blogsData from "../../blogs.json";
import "./RelatedBlogPosts.css";

const RelatedBlogPosts = () => {
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
    <div className="recommendation-container">
      <h1 className="">Recommended Blog Posts</h1>
      <div className="recommendation-row">
        {recommendations.map((id) => {
          const blog = blogsData.blogs[id];
          return (
            <div key={id} className="recommendation-card">
              <h2>{blog.title}</h2>
              <img src={blog.image} alt={blog.title} />
              <a href={blog.url}>Read More</a>
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <button onClick={generateRecommendations}>
          Generate More Recommendations
        </button>
      </div>
    </div>
  );
};

export default RelatedBlogPosts;
