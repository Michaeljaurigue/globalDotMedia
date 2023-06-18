import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
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

import MaadBlog from "../pages/MaadBlog/Maadblog";
// import Blog1 from "../pages/MaadBlog/BlogPages/BlogPost/Blog1";
import Blog2 from "../pages/MaadBlog/BlogPages/BlogPost/Blog2";
import Blog3 from "../pages/MaadBlog/BlogPages/BlogPost/Blog3";
import Blog4 from "../pages/MaadBlog/BlogPages/BlogPost/Blog4";
import Blog5 from "../pages/MaadBlog/BlogPages/BlogPost/Blog5";
import Blog6 from "../pages/MaadBlog/BlogPages/BlogPost/Blog6";
import Blog7 from "../pages/MaadBlog/BlogPages/BlogPost/Blog7";
import Blog8 from "../pages/MaadBlog/BlogPages/BlogPost/Blog8";
import Blog9 from "../pages/MaadBlog/BlogPages/BlogPost/Blog9";
import Blog10 from "../pages/MaadBlog/BlogPages/BlogPost/Blog10";
import Blog11 from "../pages/MaadBlog/BlogPages/BlogPost/Blog11";
import Blog12 from "../pages/MaadBlog/BlogPages/BlogPost/Blog12";
import Blog13 from "../pages/MaadBlog/BlogPages/BlogPost/Blog13";
import Blog14 from "../pages/MaadBlog/BlogPages/BlogPost/Blog14";

import Podcast from "../pages/Podcast/BusinessPodcasts";
// import Podcast1 from "../pages/Podcast/PodcastPages/Podcast1";
import Podcast2 from "../pages/Podcast/PodcastPages/Podcast2";
// import Podcast3 from "../pages/Podcast/PodcastPages/Podcast3";
// import Podcast4 from "../pages/Podcast/PodcastPages/Podcast4";
// import Podcast5 from "../pages/Podcast/PodcastPages/Podcast5";
// import Podcast6 from "../pages/Podcast/PodcastPages/Podcast6";
// import Podcast7 from "../pages/Podcast/PodcastPages/Podcast7";

import Testimonials from "../pages/Testimonials/Testimonials";
import Contact from "../pages/Contact/Contact";
import FAQ from "../pages/MISC/FAQ/FAQ";
import RefundPolicy from "../pages/MISC/RefundPolicy/RefundPolicy";
import NotFound from "../pages/NotFound/NotFound";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/our-services/" element={<Services />} />
          <Route
            path="/book-publishing-and-marketing-service/"
            element={<BookPublishingAndMarketingService />}
          />
          <Route
            path="/social-media-marketing/"
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

          <Route path="/maad-blog/" element={<MaadBlog />} />
          {/* <Route
            path="/eny-talks-on-the-joyful-path-podcast-with-lydia/"
            element={<Blog1 />}
          /> */}
          <Route
            path="/how-to-use-new-linkedin-campaign-manager/"
            element={<Blog2 />}
          />
          <Route
            path="/linkedin-is-changing-you-should-change-your-marketing-strategy-too/"
            element={<Blog3 />}
          />
          <Route
            path="/why-southwest-businesses-need-the-global-media-app-right-now"
            element={<Blog4 />}
          />

          <Route
            path="/the-7-real-benefits-of-social-media-marketing-for-business-updated/"
            element={<Blog5 />}
          />
          <Route
            path="/internet-marketing-profits-course-free-30-day-trial/"
            element={<Blog6 />}
          />
          <Route
            path="/8-strategies-to-make-linkedin-work-for-your-business-interview-with-chris-lewis"
            element={<Blog7 />}
          />
          <Route
            path="/making-the-law-of-attraction-work-for-your-marketing-campaigns/"
            element={<Blog8 />}
          />
          <Route
            path="/the-big-reason-your-business-email-marketing-is-not-working-marketing-magic-tip"
            element={<Blog9 />}
          />
          <Route
            path="/12-foolproof-creative-methods-to-make-your-business-memorable-marketing-magic-tip"
            element={<Blog10 />}
          />
          <Route
            path="/what-will-leading-marketers-look-like-in-post-covid19"
            element={<Blog11 />}
          />
          <Route
            path="/what-is-googles-mobile-first-indexing-and-what-does-it-mean-for-your-business-website-videoblog"
            element={<Blog12 />}
          />
          <Route
            path="/seven-key-things-clients-can-do-to-get-the-best-results-from-your-marketing-agency"
            element={<Blog13 />}
          />
          <Route
            path="/linkedin-masterclass-series-live-webinars-secrets-to-start-getting-clients-on-linkedin-free-webinar-on-2-july-2020"
            element={<Blog14 />}
          />

          <Route path="/testimonials/" element={<Testimonials />} />

          <Route path="/maad-blog/businesspodcasts/" element={<Podcast />} />
          {/* <Route
            path="/the-learnin-podcast-episode-3-making-the-law-of-attraction-work-for-you-on-linkedin/"
            element={<Podcast1 />}
          /> */}
          <Route
            path="/the-learnin-podcast-why-you-must-tune-in/"
            element={<Podcast2 />}
          />

          <Route path="/contact/" element={<Contact />} />
          <Route path="/faq/" element={<FAQ />} />
          <Route path="/refund-policy/" element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
