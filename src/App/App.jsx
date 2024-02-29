import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Login from "../components/Login/login";
import SignUp from "../components/SignUp/SignUp";

import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateBlog from "../pages/Dashboard/CreateBlog";


import BookPublishingAndMarketingService from "../pages/Services/book-publishing-and-marketing-service/book-publishing-and-marketing-service";
import SocialMediaMarketing from "../pages/Services/social-media-marketing/social-media-marketing";
import DigitalMarketingTraining from "../pages/Services/digital-marketing-training/digital-marketing-training";
import EmailMarketing from "../pages/Services/email-marketing/email-marketing";
import CreativeMediaAdvertising from "../pages/Services/creative-media-advertising/creative-media-advertising";
import DigitalMarketingPackages from "../pages/Services/digital-marketing-packages/digital-marketing-packages";
import LinkedInLeadGeneration from "../pages/Services/linkedin-lead-generation/linkedin-lead-generation";
import ContentMarketing from "../pages/Services/content-marketing/content-marketing";
import LocalMarketing from "../pages/Services/local-marketing/local-marketing";
import MarketResearch from "../pages/Services/market-research/market-research";
import MobileMarketing from "../pages/Services/mobile-marketing/mobile-marketing";
import OfflineMarketingConsultancy from "../pages/Services/offline-marketing-consultancy/offline-marketing-consultancy";
import OnlineTraining from "../pages/Services/online-training/online-training";
import PayPerClickMarketing from "../pages/Services/pay-per-click-marketing/pay-per-click-marketing";
import SearchEngineOptimization from "../pages/Services/search-engine-optimization/search-engine-optimization";
import VideoMarketing from "../pages/Services/video-marketing/video-marketing";
import WebsiteDevelopment from "../pages/Services/website-development/website-development";
import CookiePolicy from "../pages/MISC/CookiePolicy/CookiePolicy";

import MaadBlog from "../pages/MaadBlog/Maadblog";
import BlogPost from "../components/BlogPost/BlogPost";

import Podcast from "../pages/Podcast/BusinessPodcasts";

import Testimonials from "../pages/Testimonials/Testimonials";
import Contact from "../pages/Contact/Contact";
import FAQ from "../pages/MISC/FAQ/FAQ";
import RefundPolicy from "../pages/MISC/RefundPolicy/RefundPolicy";
import TermsAndConditions from "../pages/MISC/TermsAndConditions/TermsAndConditions";
import NotFound from "../pages/NotFound/NotFound";
import Footer from "../components/Footer/Footer";

import { useState, useEffect } from "react";
import { APIKEY } from "../utils/constants";
import { LATITUDE, LONGITUDE } from "../utils/constants";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";


function App() {
  const [weatherData, setWeatherData] = useState({});



  useEffect(() => {
    if (LATITUDE && LONGITUDE) {
      getForecastWeather(LATITUDE, LONGITUDE, APIKEY)
        .then((data) => {
          setWeatherData(parseWeatherData(data));
        })
        .catch((error) => {
          console.log("Error fetching forecast weather data:", error);
        });
    }
  }, []);



  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/our-services/" element={<Services />} />
          <Route path="/dashboard/" element={<Dashboard />} />
          <Route path="/create-blog/" element={<CreateBlog />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/signup/" element={<SignUp />} />
          <Route
            path="/book-publishing-and-marketing-service/"
            element={<BookPublishingAndMarketingService />}
          />
          <Route
            path="/our-services/social-media-marketing/"
            element={<SocialMediaMarketing />}
          />
          <Route
            path="/digital-marketing-training/"
            element={<DigitalMarketingTraining />}
          />
          <Route
            path="/our-services/creative-media-advertising/"
            element={<CreativeMediaAdvertising />}
          />
          <Route
            path="/our-services/digital-marketing-packages/"
            element={<DigitalMarketingPackages />}
          />
          <Route
            path="/our-services/linkedin-lead-generation/"
            element={<LinkedInLeadGeneration />}
          />
          <Route
            path="/our-services/content-marketing/"
            element={<ContentMarketing />}
          />
          <Route
            path="/our-services/local-marketing/"
            element={<LocalMarketing />}
          />
          <Route
            path="/our-services/market-research/"
            element={<MarketResearch />}
          />
          <Route
            path="/our-services/email-marketing/"
            element={<EmailMarketing />}
          />
          <Route
            path="/our-services/mobile-marketing/"
            element={<MobileMarketing />}
          />
          <Route
            path="/our-services/offline-marketing-consultancy/"
            element={<OfflineMarketingConsultancy />}
          />
          <Route
            path="/our-services/online-training/"
            element={<OnlineTraining />}
          />
          <Route
            path="/our-services/pay-per-click-marketing/"
            element={<PayPerClickMarketing />}
          />
          <Route
            path="/our-services/search-engine-optimization/"
            element={<SearchEngineOptimization />}
          />
          <Route
            path="/our-services/video-marketing/"
            element={<VideoMarketing />}
          />
          <Route
            path="/our-services/website-development/"
            element={<WebsiteDevelopment />}
          />

          <Route path="/maad-blog/" element={<MaadBlog
          />} />

          <Route path="/:slug/*" element={<BlogPost
          />} />

          <Route path="/testimonials/" element={<Testimonials />} />

          <Route path="/maad-blog/businesspodcasts/" element={<Podcast />} />
          {/* <Route
            path="/the-learnin-podcast-episode-3-making-the-law-of-attraction-work-for-you-on-linkedin/"
            element={<PodcastOne />}
          />
          <Route
            path="/the-learnin-podcast-why-you-must-tune-in/"
            element={<Podcast2 />}
          /> */}

          <Route path="/contact/" element={<Contact />} />
          <Route path="/faq/" element={<FAQ />} />
          <Route path="/refund-policy/" element={<RefundPolicy />} />
          <Route path="/cookie-policy/" element={<CookiePolicy />} />
          <Route
            path="/terms-and-conditions/"
            element={<TermsAndConditions />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer weatherData={weatherData} />

        <CookieConsent
          location="bottom"
          buttonText="I Understand"
          cookieName="GlobalDotMediaCookieConsent"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
          enableDeclineButton
          onAccept={(acceptedByScrolling) => {
            if (acceptedByScrolling) {
              console.log("Accept was triggered by user scrolling");
            } else {
              console.log("Accept was triggered by clicking the Accept button");
            }
          }}
          onDecline={() => {
            console.log("User declined cookies");
          }}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>
            {" "}
            <a href="/cookie-policy" style={{ color: "#fff" }}>
              Learn more
            </a>
          </span>
        </CookieConsent>
      </Router>
    </div>
  );
}

export default App;
