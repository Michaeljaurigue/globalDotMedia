import React, { useEffect, useRef } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const logoRef = useRef(null);

  useEffect(() => {
    // Scroll to the top of the page when the logo is clicked
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (logoRef.current) {
      logoRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (logoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        logoRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="footer-container">
      <div className="footer_container_items">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo" ref={logoRef}>
              <img
                src="/images/logo.jpg"
                alt="logo"
                className="social-logo-img"
              />
            </Link>
          </div>

          <small className="website-rights">Global.Media © 2023</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="https://www.facebook.com/globaldotmedia/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="https://www.instagram.com/globaldotmedia"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="https://twitter.com/globaldotmedia"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="https://uk.linkedin.com/in/enyosung"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="footer_section">
          <h2>About</h2>
          <p>London Office: 207 Regent Street, London W1B 3HH</p>
          <p>Cornwall Office: Eden House, Forge Lane, Saltash, PL12 6LX</p>
          <p>
            Tel: 020 3745 7678 & 03333 448270 (Office) 07599 527 195 (Direct)
          </p>
        </div>

        {/* Company Section */}
        <div className="footer_section">
          <h2>Company</h2>

          <Link className="footer-link-item" to="/maad-blog" ref={logoRef}>
            Blog
          </Link>
          <Link className="footer-link-item" to="/faq" ref={logoRef}>
            FAQ
          </Link>
          <Link className="footer-link-item" to="/refund-policy/" ref={logoRef}>
            Refund Policy
          </Link>
          <Link className="footer-link-item" to="/terms-and-conditions/" ref={logoRef}>
            Terms & Privacy
          </Link>
        </div>

        {/* Newsletter Sign Up */}
        <div className="footer_section">
          <h2>Newsletter Sign Up</h2>
          <p>
            Join our mailing list to receive digital marketing tips and
            resources
          </p>
          <form className="footer-email-form">
            <input
              type="email"
              className="footer-input"
              placeholder="Enter your email"
            />
            <button className="footer-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
