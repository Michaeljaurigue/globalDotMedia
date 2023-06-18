import React from "react";
import podcastsData from "../../podcasts.json";
import "./PodcastPost.css";

const PodcastPost = ({ id }) => {
  const {
    title,
    description,
    image,
    date,
    author,
    applePodcastsUrl,
    spotifyUrl,
    p,
  } = podcastsData.podcasts[id];

  return (
    <div className="podcast-post">
      <h1 className="podcast-post__title">{title}</h1>
      <img className="podcast-post__image" src={image} alt={title} />
      <p className="podcast-post__description">{description}</p>
      <div className="podcast-post__info">
        <span className="podcast-post__author">{author}</span>
        <span className="podcast-post__date">{date}</span>
        <p>{p}</p>
        <div className="podcast-post__links">
          <h2>Listen to the podcast on:</h2>
          <a href={applePodcastsUrl} target="_blank" rel="noopener noreferrer">
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
      </div>
    </div>
  );
};

export default PodcastPost;
