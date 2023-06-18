import React, { useState, useEffect } from "react";
import podcastsData from "../../podcasts.json";
import "./BusinessPodcasts.css";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Business Podcast - Global.Media</title>
        <link
          rel="canonical"
          href="http://globaldotmedia.com/maad-blog/businesspodcasts"
        />
        <meta
          name="description"
          content="Welcome to Global.Media's Business Podcast page. We have a wide range of podcasts for you to listen to."
        />
      </Helmet>
      <HeroHeader
        h1={"Podcast"}
        h2={
          "Welcome to Global.Media's Business Podcast page. We have a wide range of podcasts for you to listen to."
        }
        link={"/images/content-marketing.jpg"}
      />
      <div className="podcast-posts-text-container">
        <h1 className="podcast-posts-h1">Podcasts</h1>
        <h2 className="podcast-posts-h2">
          Welcome to Global.Media's Business Podcast page!
        </h2>
      </div>
      <div className="podcast-posts-container">
        <p className="podcast-posts-p">
          "Here at Global.Media, we love sharing ideas and insights to help our
          network build their businesses. The LearnIn is our new podcast series
          that aims to give you tips, strategies, hacks, and methods to make
          LinkedIn work for your business. We are grateful to our podcast
          producers, The Podcast Guys, without whom producing these podcasts may
          not have happened right now. Dan and the team take all of the pressure
          off us by handling the technical and organizing side of doing the
          podcasts. So what can you expect on The LearnIn?
        </p>
        <p className="podcast-posts-p">
          We aim to share the methods we use to generate leads for businesses
          using LinkedIn lead generation. We know that you can follow
          instructions to the letter and still miss out on the results that you
          want. That is why we will be inviting amazing guests – entrepreneurs,
          experts, and marketers – to share their experiences and hacks to help
          you sharpen your LinkedIn marketing even more. They will be invited to
          discuss using LinkedIn to make connections, generate leads, improve
          brand awareness, foster business relationships and partnerships, share
          content, and drive traffic to your website. We also aim to give you
          answers to the questions you want to ask. So you can send us questions
          as and when you like or save them for our Questions and Answers
          episodes. Enjoy The LearnIn, which is available on all major podcast
          platforms, including Apple Podcasts and Spotify. Every episode will
          also be available here!
        </p>
        <img
          src="/images/global.media-app-banner.jpg"
          alt="globaldotmedia-app-banner"
          className="podcast-posts-img"
        />
        <p className="podcast-posts-p">
          Global.Media App Banner: Here, you can listen to our weekly insightful
          interviews with business owners featured on Eny’s Happy Hour – a
          weekly show on www.businessradio.co.uk. Grab the downloadable podcasts
          to listen to local small business owners as they candidly share what
          motivated them to go into entrepreneurship, their experience of
          running businesses, lessons for aspiring entrepreneurs, and much more,
          all mixed with a variety of awesome music to suit all musical tastes.
          We believe internet radio is one of the key platforms in future
          digital marketing, as it gives businesses the chance to show their
          personal side and authority in a way that is impossible to convey in
          hundreds of text pages on a website. The beauty for listeners is the
          fact that our guests are not trying to sell their products and
          services. They simply aim to inform, educate, and possibly inspire
          other startups to take the right steps to begin and grow their
          business, instead of learning the hard way through making costly
          mistakes. For digital marketing consultancy like smallbiz-emarketing,
          our show is a fantastic addition to our online marketing services for
          clients and prospective clients alike. Furthermore, guests who come on
          the show get FREE advertising and Public Relations exposure for their
          company to a growing audience of their potential customers. The beauty
          for listeners is the fact that our guests are not trying to sell their
          products and services. They simply aim to inform, educate, and
          possibly inspire other entrepreneurs to take the right steps to start
          and grow their business, instead of learning the hard way through
          making costly mistakes.
        </p>
        <p className="podcast-posts-p">
          Existing business owners also benefit enormously from getting
          inspiration and advice to move their business to the next stage from
          people who have been there, seen it, and got the t-shirt! If you are a
          business owner who wants to appear on our show and get advertising to
          thousands of local listeners, a podcast for your website, and social
          media promotion of your business, please get in touch. Be sure to
          check back here every week to be one of the first to hear new podcasts
          as we upload them. Of course, we welcome your comments and suggestions
          to make our shows even better.
        </p>
        <p className="podcast-posts-p">
          Please leave your feedback in the comments section or tweet us
          @globaldotmedia, Facebook us @Global.Media, or link up with me on
          LinkedIn @enyosung. Enjoy the interviews!"
        </p>
      </div>
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
