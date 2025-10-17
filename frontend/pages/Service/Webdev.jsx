
import "./Webdev.css";
import React, { useEffect, useState } from "react";
import heroBg from "/assets/a.jpg";
import devImg from "/assets/2.jpg";
import appImg from "/assets/3.jpg";

const WebDevDetails = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="webdev-details-page">
      <section
        className="webdevdetails-hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPositionY: `${offsetY * 0.5}px`, // 👈 scroll speed adjust
        }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Website & Mobile App Development</h1>
          <p>
           Transform your ideas into powerful digital experiences with 
           our website and mobile development services. We design and build responsive, fast,
            and secure websites and apps that deliver real results. From concept to launch, our 
            solutions are optimized for usability, engagement, and performance — helping your brand thrive
             in today’s competitive digital landscape.
          </p>
          {/* ✅ Clickable Button */}
    <a href="#services" className="hero-btn">
      Contact US
    </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>Building Experiences that Drive Success</h2>
            <p>
              At Faktary e Solution, we specialize in crafting high-performing
              websites and mobile applications that are not only visually
              stunning but also strategically designed to deliver measurable
              business results.
            </p>
            <p>
              Our development approach is centered on user experience, speed,
              security, and scalability — ensuring your product stands out in
              today’s competitive digital landscape.
            </p>
          </div>
          <div className="about-img">
            <img src={devImg} alt="Web Development" />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <h2>Our Development Process</h2>
      <div className="process-grid">
          <div className="process-card">
            <h3>1. Discovery & Strategy</h3>
            <p>
              We begin with deep research to understand your goals, users, and
              competitors to create a clear development roadmap.
            </p>
          </div>
          <div className="process-card">
            <h3>2. UI/UX Design</h3>
            <p>
              Our designers craft intuitive, attractive, and user-focused
              designs that enhance engagement and conversion.
            </p>
          </div>
          <div className="process-card">
            <h3>3. Development</h3>
            <p>
              We use modern technologies like React, Node, Flutter, and Laravel
              to build robust, scalable solutions for web and mobile.
            </p>
          </div>
          <div className="process-card">
            <h3>4. Quality Assurance</h3>
            <p>
              Rigorous testing ensures flawless performance, security, and
              reliability before launch.
            </p>
          </div>
          <div className="process-card">
            <h3>5. Launch & Maintenance</h3>
            <p>
              After deployment, we offer ongoing monitoring, updates, and
              optimization to keep your product performing at its best.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="tech-section">
        <h2>Technologies We Work With</h2>
        <ul className="tech-list">
          <li>React.js</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Laravel</li>
          <li>PHP</li>
          <li>Flutter</li>
          <li>React Native</li>
          <li>.NET</li>
        </ul>
      </section>

      {/* MOBILE APP SECTION */}
      <section className="app-section">
        <div className="app-container">
          <div className="app-img">
            <img src={appImg} alt="Mobile App Development" />
          </div>
          <div className="app-text">
            <h2>Seamless Mobile Experiences</h2>
            <p>
              We create high-quality native and cross-platform mobile apps that
              deliver exceptional user experiences and help you stay connected
              with your customers anytime, anywhere.
            </p>
            <p>
              Whether you’re building a startup MVP or scaling an enterprise
              solution, our mobile app developers ensure performance, usability,
              and innovation every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Let’s Build Your Digital Future</h2>
        <p>
          Ready to bring your website or mobile app idea to life? Our team is
          here to turn your vision into a high-performing digital experience.
        </p>
        <a href="/contact" className="cta-btn">
          Get a Free Consultation →
        </a>
      </section>
    </div>
  );
};

export default WebDevDetails;
