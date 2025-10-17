import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";


const Footer = () => {
  return (
    <>
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
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>
            <strong>Office 1:</strong> 105, Option Primo Premises, Plot No. X-21, Marol
            Industrial Estate, MIDC Cross Rd, Andheri East, Mumbai, India
          </p>
          <p>
            <strong>Office 2:</strong> 312 Crescent Business Square, Next to Skoda
            Showroom, Sakinaka, Kherani Road, Andheri East, Mumbai, India
          </p>
          <p>
            📧 <a href="mailto:info@faktaryesolutions.com">info@faktaryesolutions.com</a>
          </p>
          <p>📞 +91 98765 43210</p>
        </div>

        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>Web & Mobile Development</li>
            <li>E-commerce Solutions</li>
            <li>Branding & Design</li>
            <li>Digital Marketing</li>
            <li>IT Support & Maintenance</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Map Section */}
      <div className="footer-map-section">
        <h3>Our Offices</h3>
        <div className="map-container">
          <iframe
            title="Faktary Offices Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.551189733681!2d72.87005427519055!3d19.173548849905205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c85c9c17a6b1%3A0x7f9f9a25e0f1a937!2sMarol%20MIDC%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697049999999!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
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
    
    </>
  );
};

export default Footer;