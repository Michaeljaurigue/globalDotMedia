import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer_container_items">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              MJ
            </Link>
          </div>
          <div className="footer-link-items">
            <Link className="footer-link-item" to="/projects">
              Projects
            </Link>
            <Link className="footer-link-item" to="/artwork">
              Artwork
            </Link>
            <Link className="footer-link-item" to="/contact">
              Contact
            </Link>
          </div>
          <small class="website-rights">Michael Jaurigue © 2023</small>
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
      </div>
    </div>
  );
}

export default Footer;
