import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "../Footer/Footer";
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
import blog1 from "../pages/MaadBlog/BlogPages/BlogPost/blog1";

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
          <Route path="/" exact Component={Home} />
          <Route path="/about/" exact Component={About} />
          <Route path="/our-services/" exact Component={Services} />
          <Route
            path="/book-publishing-and-marketing-service/"
            exact
            Component={BookPublishingAndMarketingService}
          />
          <Route
            path="/social-media-marketing/"
            exact
            Component={SocialMediaMarketing}
          />
          <Route
            path="/digital-marketing-training/"
            exact
            Component={DigitalMarketingTraining}
          />
          <Route
            path="/our-services/creative-media-advertising/"
            exact
            Component={CreativeMediaAdvertising}
          />
          <Route
            path="/our-services/digital-marketing-packages/"
            exact
            Component={DigitalMarketingPackages}
          />
          <Route
            path="/our-services/linkedin-lead-generation/"
            exact
            Component={LinkedInLeadGeneration}
          />
          <Route
            path="/our-services/content-marketing/"
            exact
            Component={ContentMarketing}
          />
          <Route
            path="/our-services/local-marketing/"
            exact
            Component={LocalMarketing}
          />
          <Route
            path="/our-services/market-research/"
            exact
            Component={MarketResearch}
          />
          <Route
            path="/our-services/email-marketing/"
            exact
            Component={EmailMarketing}
          />
          <Route
            path="/our-services/mobile-marketing/"
            exact
            Component={MobileMarketing}
          />
          <Route
            path="/our-services/offline-marketing-consultancy/"
            exact
            Component={OfflineMarketingConsultancy}
          />
          <Route
            path="/our-services/online-training/"
            exact
            Component={OnlineTraining}
          />
          <Route
            path="/our-services/pay-per-click-marketing/"
            exact
            Component={PayPerClickMarketing}
          />
          <Route
            path="/our-services/search-engine-optimization/"
            exact
            Component={SearchEngineOptimization}
          />
          <Route
            path="/our-services/video-marketing/"
            exact
            Component={VideoMarketing}
          />
          <Route
            path="/our-services/website-development/"
            exact
            Component={WebsiteDevelopment}
          />
          <Route path="/maad-blog/" exact Component={MaadBlog} />
          <Route
            path="/eny-talks-on-the-joyful-path-podcast-with-lydia/"
            exact
            Component={blog1}
          />

          <Route path="/faq/" exact Component={FAQ} />
          <Route path="/refund-policy/" exact Component={RefundPolicy} />
          <Route path="*" exact Component={NotFound} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
