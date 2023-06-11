import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "../Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about/" exact Component={About} />
          {/* <Route path="/projects" exact Component={Projects} />
          <Route path="/artwork" exact Component={Artwork} />
          <Route path="/resume" exact Component={Resume} />
          <Route path="/contact" exact Component={Contact} /> */}
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
