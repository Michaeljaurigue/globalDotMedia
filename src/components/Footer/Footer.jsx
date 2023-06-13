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
        logoRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="footer-container">
      <div class="footer_container_items">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo" ref={logoRef}>
              <img
                src="/images/logo.jpg"
                alt="logo"
                className="social-logo-img"
              />
            </Link>
          </div>

          <small class="website-rights">Global.Media © 2023</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="https://www.facebook.com/globaldotmedia/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="https://www.instagram.com/globaldotmedia"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="https://twitter.com/globaldotmedia"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link linkedin"
              to="https://uk.linkedin.com/in/enyosung"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div class="footer_section">
          <h2>About</h2>
          <p>London Office: 207 Regent Street, London W1B 3HH</p>
          <p>Cornwall Office: Eden House, Forge Lane, Saltash, PL12 6LX</p>
          <p>
            Tel: 020 3745 7678 & 03333 448270 (Office) 07599 527 195 (Direct)
          </p>
        </div>

        {/* Company Section */}
        <div class="footer_section">
          <h2>Company</h2>

          <Link className="footer-link-item" to="/maad-blog" ref={logoRef}>
            Blog
          </Link>
          <Link className="footer-link-item" to="/faq" ref={logoRef}>
            FAQ
          </Link>
          <Link className="footer-link-item" to="/refund-policy" ref={logoRef}>
            Refund Policy
          </Link>
          <Link className="footer-link-item" to="/terms" ref={logoRef}>
            Terms & Privacy
          </Link>
        </div>

        {/* Newsletter Sign Up */}
        <div class="footer_section">
          <h2>Newsletter Sign Up</h2>
          <p>
            Join our mailing list to receive digital marketing tips and
            resources
          </p>
          <form class="footer-email-form">
            <input
              type="email"
              className="footer-input"
              placeholder="Enter your email"
            />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
