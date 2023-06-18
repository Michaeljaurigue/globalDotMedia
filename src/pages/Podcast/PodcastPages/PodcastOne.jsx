import React from "react";
import PodcastPost from "../../../components/PodcastPost/PodcastPost";

const PodcastOne = () => {
  const podcastId = "podcast1";

  return (
    <>
      <PodcastPost id={podcastId} />
    </>
  );
};

export default PodcastOne;
