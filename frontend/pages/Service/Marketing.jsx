import "./Marketing.css";
import React, { useEffect, useState } from "react";
import heroBg from "/assets/3.jpg"; // replace with your digital marketing hero image
import marketingImg from "/assets/1.jpg"; // replace with relevant image
import appImg from "/assets/2.jpg"; // replace with relevant image

const DigitalMarketingDetails = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="marketing-details-page">
      {/* HERO SECTION */}
      <section
        className="marketing-hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPositionY: `${offsetY * 0.5}px`,
        }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Result-Driven Digital Marketing</h1>
          <p>
            Boost your brand visibility and drive conversions with our
            comprehensive digital marketing solutions. From SEO and PPC to
            social media and content marketing, we help businesses grow online.
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
            <h2>Effective Marketing Strategies</h2>
            <p>
              At Faktary e Solution, we craft customized marketing campaigns
              that increase traffic, engagement, and sales for your business.
            </p>
            <p>
              Our approach focuses on measurable results, brand building, and
              online growth — giving your business the competitive edge it needs.
            </p>
          </div>
          <div className="about-img">
            <img src={marketingImg} alt="Digital Marketing Solutions" />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <h2>Our Digital Marketing Process</h2>
        <div className="process-grid">
          <div className="process-card">
            <h3>1. Research & Analysis</h3>
            <p>
              We study your industry, competitors, and target audience to
              design a strategic marketing roadmap.
            </p>
          </div>
          <div className="process-card">
            <h3>2. Strategy & Planning</h3>
            <p>
              Our team creates a tailored marketing strategy covering SEO,
              social media, PPC, email campaigns, and more.
            </p>
          </div>
          <div className="process-card">
            <h3>3. Campaign Execution</h3>
            <p>
              We implement campaigns with precision using cutting-edge
              marketing tools and platforms.
            </p>
          </div>
          <div className="process-card">
            <h3>4. Performance Tracking</h3>
            <p>
              Ongoing monitoring and analytics ensure campaigns meet KPIs and
              ROI goals.
            </p>
          </div>
          <div className="process-card">
            <h3>5. Optimization & Reporting</h3>
            <p>
              Continuous improvements and detailed reporting help maximize your
              marketing success.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES / TOOLS SECTION */}
      <section className="tech-section">
        <h2>Tools & Platforms We Use</h2>
        <ul className="tech-list">
          <li>Google Ads</li>
          <li>Facebook Ads</li>
          <li>Instagram Marketing</li>
          <li>SEO Tools</li>
          <li>Content Marketing</li>
          <li>Email Marketing</li>
          <li>Analytics & Reporting</li>
        </ul>
      </section>

      {/* APP / SHOWCASE SECTION */}
      <section className="app-section">
        <div className="app-container">
          <div className="app-img">
            <img src={appImg} alt="Digital Marketing Campaign" />
          </div>
          <div className="app-text">
            <h2>Maximize Your Online Reach</h2>
            <p>
              We create multi-channel marketing campaigns that increase your
              brand presence and attract qualified leads.
            </p>
            <p>
              From small businesses to enterprises, our digital marketing
              experts focus on growth, engagement, and ROI.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Grow Your Business Online Today</h2>
        <p>
          Ready to boost your online presence and sales? Partner with us for
          professional digital marketing solutions.
        </p>
        <a href="/contact" className="cta-btn">
          Get a Free Consultation →
        </a>
      </section>
    </div>
  );
};

export default DigitalMarketingDetails;
