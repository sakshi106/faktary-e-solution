import "./It.css";
import React, { useEffect, useState } from "react";
import heroBg from "/assets/3.jpg"; // replace with your IT hero image
import itImg from "/assets/a.jpg"; // replace with relevant image
import appImg from "/assets/2.jpg"; // replace with relevant image

const ITSupportDetails = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="it-details-page">
      {/* HERO SECTION */}
      <section
        className="it-hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPositionY: `${offsetY * 0.5}px`,
        }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Reliable IT Support & Maintenance</h1>
          <p>
            Keep your systems secure, efficient, and running smoothly with our
            expert IT support and maintenance services. From troubleshooting to
            proactive monitoring, we ensure your technology works seamlessly.
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
            <h2>Comprehensive IT Services</h2>
            <p>
              At Faktary e Solution, we provide end-to-end IT support for
              businesses, helping maintain uptime, secure networks, and
              optimized performance.
            </p>
            <p>
              Our IT maintenance plans focus on reliability, security, and
              efficiency — so your team can focus on growth while we handle
              technology.
            </p>
          </div>
          <div className="about-img">
            <img src={itImg} alt="IT Support & Maintenance" />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <h2>Our IT Support & Maintenance Process</h2>
        <div className="process-grid">
          <div className="process-card">
            <h3>1. Assessment & Audit</h3>
            <p>
              We evaluate your existing IT infrastructure to identify gaps,
              risks, and optimization opportunities.
            </p>
          </div>
          <div className="process-card">
            <h3>2. Strategy & Planning</h3>
            <p>
              Our experts create a tailored IT support and maintenance plan
              suited to your business needs.
            </p>
          </div>
          <div className="process-card">
            <h3>3. Implementation</h3>
            <p>
              We deploy monitoring, security, updates, and technical support
              solutions to ensure smooth operations.
            </p>
          </div>
          <div className="process-card">
            <h3>4. Monitoring & Support</h3>
            <p>
              Continuous system monitoring and proactive troubleshooting prevent
              downtime and IT issues.
            </p>
          </div>
          <div className="process-card">
            <h3>5. Reporting & Optimization</h3>
            <p>
              Regular performance reports and updates allow us to optimize your
              IT systems for efficiency and security.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES / TOOLS SECTION */}
      <section className="tech-section">
        <h2>Tools & Platforms We Use</h2>
        <ul className="tech-list">
          <li>Network Monitoring</li>
          <li>Server Management</li>
          <li>Cloud Services</li>
          <li>Backup & Recovery</li>
          <li>Cybersecurity Tools</li>
          <li>Helpdesk & Ticketing</li>
          <li>Remote Support</li>
        </ul>
      </section>

      {/* APP / SHOWCASE SECTION */}
      <section className="app-section">
        <div className="app-container">
          <div className="app-img">
            <img src={appImg} alt="IT Support Services" />
          </div>
          <div className="app-text">
            <h2>Efficient IT Operations</h2>
            <p>
              Our IT support ensures your infrastructure runs without
              interruptions and your team can focus on productivity.
            </p>
            <p>
              We provide scalable and secure IT solutions for businesses of all
              sizes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Keep Your Business IT Secure & Reliable</h2>
        <p>
          Partner with us for expert IT support and maintenance that ensures
          smooth operations and technology peace of mind.
        </p>
        <a href="/contact" className="cta-btn">
          Get a Free Consultation →
        </a>
      </section>
    </div>
  );
};

export default ITSupportDetails;
