import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "../../blogs.json";
import "./BlogPost.css";
import RelatedBlogPosts from "../RelatedBlogPosts/RelatedBlogPosts";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const slugPath = slug ? `/${slug}` : "";
  const blog = blogsData.blogs[slugPath];

  console.log(blog);
  if (!blog) {
    // Handle the case when the blog post with the given ID is not found
    return <div>Blog post not found</div>;
  }

  const { title, url, h1, image, h2, h3, h4, p, author, date, embedSrc } = blog;

  const shareOnFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(shareUrl, "_blank");
  };

  const shareOnLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}`;
    window.open(shareUrl, "_blank");
  };

  const shareOnTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`;
    window.open(shareUrl, "_blank");
  };

  const shareOnInstagram = () => {
    // Redirect to Instagram sharing URL
    window.location.href = `https://www.instagram.com/?url=${encodeURIComponent(
      url
    )}`;
  };

  const shareByEmail = () => {
    const subject = `Check out this blog post: ${title}`;
    const body = `I thought you might find this blog post interesting:\n${url}`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="blog-post">
      <h1 className="blog-post__title">{title}</h1>
      <img className="blog-post__image" src={image} alt={title} />

      <div className="blog-post__info">
        <span className="blog-post__author">{author}</span>
        <span className="blog-post__date">{date}</span>

        <h2 className="blog-post__subtitle">{h1}</h2>
        <h3 className="blog-post__subtitle">{h2}</h3>
        <h4 className="blog-post__subtitle">{h3}</h4>

        <p className="blog-post__content">{p}</p>
        <h4 className="blog-post__subtitle">{h4}</h4>
        <iframe
          className="blog-post__video"
          src={embedSrc}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
        ></iframe>

        <RelatedBlogPosts relatedIds={blog.relatedIds} />

        <div className="blog-post__share">
          <button
            className="share-button share-button--facebook"
            onClick={shareOnFacebook}
          >
            <i className="fab fa-facebook-f"></i>
          </button>
          <button
            className="share-button share-button--linkedin"
            onClick={shareOnLinkedIn}
          >
            <i className="fab fa-linkedin"></i>
          </button>
          <button
            className="share-button share-button--twitter"
            onClick={shareOnTwitter}
          >
            <i className="fab fa-twitter"></i>
          </button>
          <button
            className="share-button share-button--instagram"
            onClick={shareOnInstagram}
          >
            <i className="fab fa-instagram"></i>
          </button>
          <button
            className="share-button share-button--email"
            onClick={shareByEmail}
          >
            <i className="fas fa-envelope"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
