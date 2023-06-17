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
    appleEmbedCode,
    spotifyEmbedCode,
  } = podcastsData.podcasts[id];

  return (
    <div className="podcast-post">
      <h1 className="podcast-post__title">{title}</h1>
      <img className="podcast-post__image" src={image} alt={title} />

      <div className="podcast-post__info">
        <span className="podcast-post__author">{author}</span>
        <span className="podcast-post__date">{date}</span>

        <p className="podcast-post__description">{description}</p>

        <div className="podcast-post__embed-code">
          <h3>Listen on Apple Podcasts</h3>
          <div dangerouslySetInnerHTML={{ __html: appleEmbedCode }}></div>

          <h3>Listen on Spotify</h3>
          <div dangerouslySetInnerHTML={{ __html: spotifyEmbedCode }}></div>
        </div>

        <div className="podcast-post__links">
          <a href={applePodcastsUrl} target="_blank" rel="noopener noreferrer">
            Apple Podcasts
          </a>
          <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
            Spotify
          </a>
        </div>
      </div>
    </div>
  );
};

export default PodcastPost;
