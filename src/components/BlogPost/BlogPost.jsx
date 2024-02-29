import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogsData from "../../blogs.json";
import "./BlogPost.css";
import RelatedBlogPosts from "../RelatedBlogPosts/RelatedBlogPosts";
import api from "../../utils/api";

const BlogPost = () => {
  // New Code to work with backend API from MongoDB with IDs.... 
  ///////////////////////////////////////////////////////////////////////
  // const [blog, setBlog] = useState(null);
  // const { id = "" } = useParams();

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const fetchedBlogs = await api.getAllBlogs(id);
  //       setBlog(fetchedBlogs);
  //       console.log("fetchedBlogs:", fetchedBlogs);
  //       console.log("id:", id);
  //     } catch (error) {
  //       console.log("Error fetching blog:", error);
  //     }
  //   };

  //   fetchBlogs();
  // }, [id]);

  // if (!blog) {
  //   return <div>Loading...</div>;
  // }

  //////////////////////////////////////////////////////////////////////////////////////////////
  // const [blogs, setBlogs] = useState([]);

  // function handleFetchBlogs(id) {
  //   api
  //     .getOneBlog(id)
  //     .then((id) => {
  //       setBlogs(
  //         blogs.filter((id) => id.id !== id.id)
  //       )
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching blogs, fml:", error);
  //     });
  // }

  // useEffect(() => {
  //   handleFetchBlogs();
  // }, []);

  // const { slug = "" } = useParams();
  // const slugPath = slug ? `${slug}` : "";
  // const blog = handleFetchBlogs([slugPath]);

  // if (!blog) {
  //   return <div>Blog post not found</div>;
  // }
  //////////////////////////////////////////////////////////////////////////////////////////////

  //Code to work with Blogs.json
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
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
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
  } = blog || {};

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
      {blog && ( // Check if blog is not null
        <>
          <h1 className="blog-post__title">{blog.title}</h1>
          <img className="blog-post__image" src={blog.image} alt={blog.title} />

          <div className="blog-post__info">
            {blog.author && <span className="blog-post__author">{blog.author}</span>}
            {blog.date && <span className="blog-post__date">{blog.date}</span>}
            {blog.h1 && <h2 className="blog-post__subtitle">{blog.h1}</h2>}
            {blog.h2 && <h3 className="blog-post__subtitle">{blog.h2}</h3>}
            {blog.embedSrc && (
              <iframe
                className="blog-post__video"
                src={blog.embedSrc}
                title={blog.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
              ></iframe>
            )}
            {blog.applePodcastsUrl && blog.spotifyUrl && (
              <div className="podcast-post__links">
                <h2>Listen to the podcast on:</h2>
                <a
                  href={blog.applePodcastsUrl}
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
                <a href={blog.spotifyUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    className="podcast-post__logo"
                    src="/images/spotify-logo.png"
                    alt="Spotify"
                  />
                  Spotify
                </a>
              </div>
            )}
            {blog.image2 && <img className="blog-post__image" src={blog.image2} alt={blog.title} />}
            {blog.h3 && <h4 className="blog-post__subtitle">{blog.h3}</h4>}
            {blog.p && <p className="blog-post__content">{blog.p}</p>}
            {blog.image3 && <img className="blog-post__image" src={blog.image3} alt={blog.title} />}
            {blog.h5 && <h4 className="blog-post__subtitle">{blog.h5}</h4>}
            {blog.p2 && <p className="blog-post__content">{blog.p2}</p>}
            {blog.image4 && <img className="blog-post__image" src={blog.image4} alt={blog.title} />}
            {blog.h6 && <h4 className="blog-post__subtitle">{blog.h6}</h4>}
            {blog.p3 && <p className="blog-post__content">{blog.p3}</p>}
            {blog.image5 && <img className="blog-post__image" src={blog.image5} alt={blog.title} />}
            {blog.h7 && <h4 className="blog-post__subtitle">{blog.h7}</h4>}
            {blog.p4 && <p className="blog-post__content">{blog.p4}</p>}
            {blog.image6 && <img className="blog-post__image" src={blog.image6} alt={blog.title} />}
            {blog.h8 && <h4 className="blog-post__subtitle">{blog.h8}</h4>}
            {blog.p5 && <p className="blog-post__content">{blog.p5}</p>}
            {blog.image7 && <img className="blog-post__image" src={blog.image7} alt={blog.title} />}
            {blog.h9 && <h4 className="blog-post__subtitle">{blog.h9}</h4>}
            {blog.p6 && <p className="blog-post__content">{blog.p6}</p>}
            {blog.image8 && <img className="blog-post__image" src={blog.image8} alt={blog.title} />}
            {blog.h10 && <h4 className="blog-post__subtitle">{blog.h10}</h4>}
            {blog.p7 && <p className="blog-post__content">{blog.p7}</p>}
            {blog.image9 && <img className="blog-post__image" src={blog.image9} alt={blog.title} />}
            {blog.h11 && <h4 className="blog-post__subtitle">{blog.h11}</h4>}
            {blog.p8 && <p className="blog-post__content">{blog.p8}</p>}
            {blog.p9 && <p className="blog-post__content">{blog.p9}</p>}
            {blog.p10 && <p className="blog-post__content">{blog.p10}</p>}
            {blog.p11 && <p className="blog-post__content">{blog.p11}</p>}
            {blog.p12 && <p className="blog-post__content">{blog.p12}</p>}
            {blog.image10 && <img className="blog-post__image" src={blog.image10} alt={blog.title} />}
            {blog.h4 && <h4 className="blog-post__subtitle">{blog.h4}</h4>}

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
        </>
      )}
    </section>
  );

}

export default BlogPost;

