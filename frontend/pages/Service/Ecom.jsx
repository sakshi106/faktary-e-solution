import "./Ecom.css";
import React, { useEffect, useState } from "react";
import heroBg from "/assets/1.jpg";
import ecomImg from "/assets/1.jpg";
import appImg from "/assets/2.jpg";

const EcomDetails = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="ecom-details-page">
      {/* HERO SECTION */}
      <section
        className="ecom-hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPositionY: `${offsetY * 0.5}px`,
        }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>End-to-End E-Commerce Solutions</h1>
          <p>
            Build, scale, and optimize your online store with our comprehensive
            e-commerce solutions. From storefront design to backend integration,
            we provide fast, secure, and engaging digital shopping experiences
            that boost conversions and drive revenue.
          </p>
          <a href="#services" className="hero-btn">
            Get Started
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>Powerful E-Commerce Experiences</h2>
            <p>
              At Faktary e Solution, we deliver e-commerce platforms that are
              visually stunning, highly functional, and optimized for sales.
            </p>
            <p>
              Our solutions focus on user experience, speed, security, and
              scalability — giving your business the tools to succeed in the
              competitive online marketplace.
            </p>
          </div>
          <div className="about-img">
            <img src={ecomImg} alt="E-Commerce Solutions" />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <h2>Our E-Commerce Development Process</h2>
        <div className="process-grid">
          <div className="process-card">
            <h3>1. Strategy & Planning</h3>
            <p>
              We analyze your market, competitors, and business goals to define
              a clear roadmap for your e-commerce project.
            </p>
          </div>
          <div className="process-card">
            <h3>2. UI/UX Design</h3>
            <p>
              Our designers craft intuitive, responsive, and attractive
              online store layouts that maximize engagement and conversions.
            </p>
          </div>
          <div className="process-card">
            <h3>3. Development</h3>
            <p>
              We implement platforms using Shopify, WooCommerce, Magento, or
              custom solutions with React, Node, and Laravel.
            </p>
          </div>
          <div className="process-card">
            <h3>4. Testing & QA</h3>
            <p>
              Comprehensive testing ensures your e-commerce store is bug-free,
              secure, and ready for smooth transactions.
            </p>
          </div>
          <div className="process-card">
            <h3>5. Launch & Support</h3>
            <p>
              After launch, we provide ongoing support, maintenance, and
              optimization to grow your online sales and user satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="tech-section">
        <h2>Platforms & Tools We Use</h2>
        <ul className="tech-list">
          <li>Shopify</li>
          <li>WooCommerce</li>
          <li>Magento</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Laravel</li>
          <li>PHP</li>
          <li>Payment Gateway Integration</li>
        </ul>
      </section>

      {/* APP / STORE SECTION */}
      <section className="app-section">
        <div className="app-container">
          <div className="app-img">
            <img src={appImg} alt="E-Commerce Mobile App" />
          </div>
          <div className="app-text">
            <h2>Mobile Shopping Experiences</h2>
            <p>
              We develop responsive mobile-friendly stores and apps that let
              customers shop seamlessly anytime, anywhere.
            </p>
            <p>
              From startups to large enterprises, our e-commerce developers
              focus on usability, speed, and security to maximize your sales.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Launch Your Online Store Today</h2>
        <p>
          Ready to take your business online? Partner with us for a complete
          e-commerce solution that drives growth and revenue.
        </p>
        <a href="/contact" className="cta-btn">
          Get a Free Consultation →
        </a>
      </section>
    </div>
  );
};

export default EcomDetails;
