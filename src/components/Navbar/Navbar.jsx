import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.jpeg";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo(0, 0);
  };
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const closeDropdownMenu = (e) => {
      if (e.keyCode === 27) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", closeDropdownMenu);
    return () => {
      window.removeEventListener("keydown", closeDropdownMenu);
    };
  }, []);

  const dropdownRef = useRef();
  useEffect(() => {
    const closeDropdownMenu = (e) => {
      if (e.keyCode === 27) {
        setIsDropdownOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("keydown", closeDropdownMenu);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", closeDropdownMenu);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navbarRef = useRef(null);
  // ...

  // Add this useEffect to handle closing the dropdown when the Escape key is pressed
  useEffect(() => {
    const handleEscapePress = (e) => {
      if (e.key === "Escape") {
        setClick(false);
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscapePress);
    return () => {
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, []);

  // Add this useEffect to handle closing the dropdown when scrolling past navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight =
        navbarRef.current?.getBoundingClientRect().height || 0;
      if (window.scrollY > navbarHeight) {
        setClick(false);
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
        <div className="navbar__container">
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" className="navbar__logo__img" />
          </Link>
          <div className="navbar__contact-info">
            <p className="navbar__phone-number">07599 527195</p>
            <p className="navbar__email">eny@globaldotmedia.com</p>
          </div>
          <div className="navbar__menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            className={
              click ? "navbar__menu navbar__menu_active" : "navbar__menu"
            }
          >
            <li className="navbar__item">
              <Link to="/" className="navbar__links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/about/"
                className="navbar__links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li
              className="navbar__item"
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownToggle}
            >
              <Link
                to="/our-services/"
                className="navbar__links"
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle();
                }} // prevent the link navigation on click and toggle the dropdown instead
              >
                Services
              </Link>
              {isDropdownOpen && (
                <ul className="navbar__dropdown" ref={dropdownRef}>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      All Services
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/book-publishing-and-marketing-service/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Book Publishing and Marketing Service
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/digital-marketing-training/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Digital Marketing Training
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/social-media-marketing/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Social Media Marketing
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/email-marketing/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Email Marketing
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/creative-media-advertising/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Creative Media Advertising
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/digital-marketing-packages/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Digital Marketing Packages
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/linkedin-lead-generation/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      LinkedIn Lead Generation
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/content-marketing/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Content Marketing
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/local-marketing/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Local Marketing
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/market-research/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Market Research
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/mobile-marketing/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Mobile Marketing
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/offline-marketing-consultancy/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Offline Marketing Consultancy
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/online-training/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Online Training
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/pay-per-click-marketing/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Pay-Per-Click Marketing
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/search-engine-optimization/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Search Engine Optimization
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/video-marketing/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Video Marketing
                    </Link>
                  </li>
                  <li className="navbar__dropdown-item">
                    <Link
                      to="/our-services/website-development/"
                      className="navbar__dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Website Development
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="navbar__item"
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownToggle}
            >
              <Link
                to="/maad-blog/"
                className="navbar__links"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/testimonials/"
                className="navbar__links"
                onClick={closeMobileMenu}
              >
                Testimonials
              </Link>
            </li>
            <li
              className="navbar__item"
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownToggle}
            >
              <Link
                to="/maad-blog/businesspodcasts/"
                className="navbar__links"
                onClick={closeMobileMenu}
              >
                Podcast
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/contact/"
                className="navbar__links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
