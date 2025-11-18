import React from "react";
import "./Footer.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Smooth scroll + route navigation in one place
  const handleNavigation = (path) => (e) => {
    e.preventDefault();

    // Navigate to the route
    navigate(path);

    // Smooth scroll to top after small delay (wait till route loads)
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <footer className="footer">
      {/* Top Info */}
      <div className="footer-top">
        <h2 className="footer-logo">Faktary E-Solutions</h2>
        <p className="footer-tagline">
          Empowering businesses through technology-driven digital solutions.
        </p>
      </div>

      {/* Main Columns */}
      <div className="footer-columns">
        {/* Contact Info */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>
            <strong>Office 1:</strong> OFFICE NO 105, 1st FLOOR, OPTIONS PRIMO
            PREMISES, PLOT NO X-21, MAROL INDUSTRIAL ESTATE, MIDC CROSS ROAD NO
            21, ANDHERI EAST, MUMBAI MH 400093
          </p>
          <p>
            <strong>Office 2:</strong> OFFICE NO 328, PLOT NO 12 VARDHAMAN BIG V
            PLAZA, COMMUNITY CENTRE PRITAMPURA, DELHI 110034
          </p>
          <p>
            <strong>Office 3:</strong> 9/13, 1st FLOOR, MASS TOWER, KANNAIAH
            STREET, DARMAPURAM, T NAGAR, CHENNAI, TN-600017
          </p>
          <p>
            📧{" "}
            <a href="mailto:faktarys@gmail.com">faktarys@gmail.com</a>
          </p>
          <p>📞 +91 7597460456</p>
        </div>

        {/* Our Services */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>
              <Link to="/webdev" onClick={handleNavigation("/webdev")}>
                Web & Mobile Development
              </Link>
            </li>
            <li>
              <Link to="/ecom" onClick={handleNavigation("/ecom")}>
                E-commerce Solutions
              </Link>
            </li>
            <li>
              <Link to="/digitaldesign" onClick={handleNavigation("/digitaldesign")}>
                Branding & Design
              </Link>
            </li>
            <li>
              <Link to="/marketing" onClick={handleNavigation("/marketing")}>
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to="/it-support" onClick={handleNavigation("/it")}>
                IT Support & Maintenance
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link
                to="/about"
                onClick={handleNavigation("/about")}
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                onClick={handleNavigation("/service")}
                className={location.pathname === "/service" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                onClick={handleNavigation("/resources")}
                className={location.pathname === "/resources" ? "active" : ""}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleNavigation("/contact")}
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/reach"
                onClick={handleNavigation("/reach")}
                className={location.pathname === "/reach" ? "active" : ""}
              >
                Reach Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Map Section */}
      <div className="footer-map-section">
        <h3>Our Offices</h3>
        <div className="map-container">
          <iframe
            title="Faktary Offices Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8716534207994!2d72.8757094749344!3d19.12051068209379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e91a59e647%3A0x32540b53e82c20da!2sFaktary%20E%20Solutions!5e0!3m2!1sen!2sin!4v1731246954100!5m2!1sen!2sin"

            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/faktarye" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Faktary E Solutions. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a> |{" "}
          <a href="#terms">Terms & Conditions</a> |{" "}
          <a href="#sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
