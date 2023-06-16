import React from "react";
import "./BlogPost.css";
import blogsData from "../../blogs.json";

const BlogPost = ({ id }) => {
  const { title, url, description, img, author, date, h1, h2, h3, h4, p } =
    blogsData.blogs[id];

  return (
    <div className="blog-post">
      <h1 className="blog-post__title">{title}</h1>
      <img className="blog-post__image" src={img} alt={title} />

      <div className="blog-post__info">
        <span className="blog-post__author">{author}</span>
        <span className="blog-post__date">{date}</span>

        {/* <h1 className="blog-post__title">
          <a href={url}>{title}</a>
        </h1> */}
        <h2 className="blog-post__subtitle">{h1}</h2>
        <h3 className="blog-post__subtitle">{h2}</h3>
        <h4 className="blog-post__subtitle">{h3}</h4>

        <p className="blog-post__content">{p}</p>
        <h4 className="blog-post__subtitle">{h4}</h4>
      </div>
    </div>
  );
};

export default BlogPost;
