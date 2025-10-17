import "./digitaldesign.css";
import React, { useEffect, useState } from "react";
import heroBg from "/assets/1.jpg";
import brandingImg from "/assets/1.jpg";
import appImg from "/assets/2.jpg";

const BrandingDetails = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="branding-details-page">
      {/* HERO SECTION */}
      <section
        className="branding-hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPositionY: `${offsetY * 0.5}px`,
        }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Creative Digital Design & Branding</h1>
          <p>
            Elevate your brand with visually stunning digital design and
            branding solutions. From logos to full-scale brand identity,
            we create designs that resonate with your audience and
            communicate your story effectively.
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
            <h2>Transformative Branding Experiences</h2>
            <p>
              At Faktary e Solution, we craft brand identities and digital designs
              that stand out and leave lasting impressions.
            </p>
            <p>
              Our creative solutions focus on consistency, visual impact,
              and user engagement — helping your brand grow recognition
              and loyalty in the market.
            </p>
          </div>
          <div className="about-img">
            <img src={brandingImg} alt="Branding & Design" />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <h2>Our Design & Branding Process</h2>
        <div className="process-grid">
          <div className="process-card">
            <h3>1. Research & Strategy</h3>
            <p>
              We study your market, competitors, and audience to create a clear
              design strategy aligned with your brand goals.
            </p>
          </div>
          <div className="process-card">
            <h3>2. Creative Design</h3>
            <p>
              Our team develops logos, graphics, and visual assets that
              represent your brand identity effectively.
            </p>
          </div>
          <div className="process-card">
            <h3>3. Branding Implementation</h3>
            <p>
              We apply your brand consistently across digital platforms,
              marketing materials, and user touchpoints.
            </p>
          </div>
          <div className="process-card">
            <h3>4. Testing & Feedback</h3>
            <p>
              We review and refine designs based on feedback and user
              engagement to ensure maximum impact.
            </p>
          </div>
          <div className="process-card">
            <h3>5. Launch & Support</h3>
            <p>
              We help launch your brand identity and provide ongoing
              support to maintain consistency and evolve your design assets.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES / TOOLS SECTION */}
      <section className="tech-section">
        <h2>Tools & Platforms We Use</h2>
        <ul className="tech-list">
          <li>Adobe Photoshop</li>
          <li>Illustrator</li>
          <li>Figma</li>
          <li>Canva</li>
          <li>Adobe XD</li>
          <li>After Effects</li>
          <li>3D Modeling Tools</li>
          <li>Brand Strategy Tools</li>
        </ul>
      </section>

      {/* APP / DIGITAL DESIGN SHOWCASE */}
      <section className="app-section">
        <div className="app-container">
          <div className="app-img">
            <img src={appImg} alt="Digital Design Showcase" />
          </div>
          <div className="app-text">
            <h2>Visual & Digital Experiences</h2>
            <p>
              We design engaging digital assets for websites, social media,
              apps, and marketing campaigns that strengthen brand presence.
            </p>
            <p>
              From concept to execution, our design team ensures every asset
              communicates your brand story with clarity and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Elevate Your Brand Today</h2>
        <p>
          Ready to transform your digital identity? Partner with us for
          creative branding and design solutions that leave a lasting impression.
        </p>
        <a href="/contact" className="cta-btn">
          Get a Free Consultation →
        </a>
      </section>
    </div>
  );
};

export default BrandingDetails;
