import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "../../blogs.json";
import "./BlogPost.css";
import RelatedBlogPosts from "../RelatedBlogPosts/RelatedBlogPosts";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const slugPath = slug ? `/${slug}` : "";
  const blog = blogsData.blogs[slugPath];

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  const {
    title,
    url,
    h1,
    image,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8,
    h9,
    h10,
    h11,
    p,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    author,
    date,
    embedSrc,
    applePodcastsUrl,
    spotifyUrl,
  } = blog;

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
    <section className="blog-post">
      <h1 className="blog-post__title">{title}</h1>
      <img className="blog-post__image" src={image} alt={title} />

      <div className="blog-post__info">
        {author && <span className="blog-post__author">{author}</span>}
        {date && <span className="blog-post__date">{date}</span>}
        {h1 && <h2 className="blog-post__subtitle">{h1}</h2>}
        {h2 && <h3 className="blog-post__subtitle">{h2}</h3>}
        {h3 && <h4 className="blog-post__subtitle">{h3}</h4>}
        {p && <p className="blog-post__content">{p}</p>}
        {h5 && <h4 className="blog-post__subtitle">{h5}</h4>}
        {p2 && <p className="blog-post__content">{p2}</p>}
        {h6 && <h4 className="blog-post__subtitle">{h6}</h4>}
        {p3 && <p className="blog-post__content">{p3}</p>}
        {h7 && <h4 className="blog-post__subtitle">{h7}</h4>}
        {p4 && <p className="blog-post__content">{p4}</p>}
        {h8 && <h4 className="blog-post__subtitle">{h8}</h4>}
        {p5 && <p className="blog-post__content">{p5}</p>}
        {h9 && <h4 className="blog-post__subtitle">{h9}</h4>}
        {p6 && <p className="blog-post__content">{p6}</p>}
        {h10 && <h4 className="blog-post__subtitle">{h10}</h4>}
        {p7 && <p className="blog-post__content">{p7}</p>}
        {h11 && <h4 className="blog-post__subtitle">{h11}</h4>}
        {p8 && <p className="blog-post__content">{p8}</p>}
        {p9 && <p className="blog-post__content">{p9}</p>}
        {p10 && <p className="blog-post__content">{p10}</p>}
        {p11 && <p className="blog-post__content">{p11}</p>}
        {p12 && <p className="blog-post__content">{p12}</p>}
        {h4 && <h4 className="blog-post__subtitle">{h4}</h4>}
        {embedSrc && (
          <iframe
            className="blog-post__video"
            src={embedSrc}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
          ></iframe>
        )}
        {applePodcastsUrl && spotifyUrl && (
          <div className="podcast-post__links">
            <h2>Listen to the podcast on:</h2>
            <a
              href={applePodcastsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="podcast-post__logo"
                src="/images/apple-podcasts-logo.png"
                alt="Apple Podcasts"
              />
              Apple Podcasts
            </a>
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
              <img
                className="podcast-post__logo"
                src="/images/spotify-logo.png"
                alt="Spotify"
              />
              Spotify
            </a>
          </div>
        )}
        <RelatedBlogPosts relatedIds={blog.relatedIds} />{" "}
        <div className="blog-post__share">
          <button
            className="blog-post__share-button blog-post__share-button--facebook"
            onClick={shareOnFacebook}
          >
            <i className="fab fa-facebook-f"></i>
          </button>
          <button
            className="blog-post__share-button blog-post__share-button--linkedin"
            onClick={shareOnLinkedIn}
          >
            <i className="fab fa-linkedin"></i>
          </button>
          <button
            className="blog-post__share-button blog-post__share-button--twitter"
            onClick={shareOnTwitter}
          >
            <i className="fab fa-twitter"></i>
          </button>
          <button
            className="blog-post__share-button blog-post__share-button--instagram"
            onClick={shareOnInstagram}
          >
            <i className="fab fa-instagram"></i>
          </button>
          <button
            className="blog-post__share-button blog-post__share-button--email"
            onClick={shareByEmail}
          >
            <i className="fas fa-envelope"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
