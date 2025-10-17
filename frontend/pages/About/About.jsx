import React, { useState, useEffect, useRef } from "react";
import "./About.css";

const slides = [
  {
    image: "/images/inovation.jpg",
    caption: "Where Innovation Meets Excellence",
    subCaption:
      "We blend creativity, strategy and technology to build experiences that drive growth.",
  },
  {
    image: "/images/partner.png",
    caption: "Turning Challenges into Digital Success",
    subCaption:
      "Faktary E Solutions — reliability + innovation to power your business growth.",
  },
  {
    image: "/images/dedication1.jpg",
    caption: "Driven by Dedication. Defined by Results.",
    subCaption:
      "Every project reflects our commitment — with precision, passion and purpose.",
  },
];

const values = [
  { title: "Client First", text: "Your success is our priority." },
  { title: "Transparent", text: "Open process & clear communication." },
  { title: "Quality Driven", text: "We deliver reliable, tested solutions." },
  { title: "Agile", text: "Fast iterations, continuous improvements." },
];

const About = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((s) => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // accessibility: allow manual navigation later (not required now)
  return (
    <div className="about-container" id="about">
      {/* HERO */}
      <header className="hero">
        <div
          className="slides-track"
          ref={trackRef}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s, idx) => (
            <div
              key={idx}
              className="slide"
              style={{ backgroundImage: `url(${s.image})` }}
            >
              <div className="slide-overlay" />
              <div className="slide-caption">
                <h1 className="slide-title">{s.caption}</h1>
                <p className="slide-sub">{s.subCaption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </header>

      {/* OUR STORY */}
      <section className="section story-section">
        <div className="story-inner">
          <div className="story-image-wrap">
            <img src="/images/mission.jpg" alt="Our story" />
          </div>

          <div className="story-card">
            <h2 className="gold">Our Story</h2>
            <p className="lead">
              Founded in 2020, Faktary E Solutions started as a small passionate
              team focused on delivering meaningful digital products. Today we
              partner with clients globally to craft scalable web and mobile
              experiences.
            </p>

            <div className="cards-row">
              <div className="mini-card">
                <h4>Mission</h4>
                <p>To empower businesses with innovative and reliable digital solutions.</p>
              </div>
              <div className="mini-card">
                <h4>Vision</h4>
                <p>To be a trusted global leader in product-driven engineering.</p>
              </div>
            </div>

            <div className="journey">
              <h4>Our Journey</h4>
              <p>
                From a 2-person startup to 100+ projects delivered, we grow by
                solving real problems for clients worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* horizontal images grid */}
        <div className="image-grid">
          <img src="/images/values.jpg" alt="v1" />
          {/* <img src="/images/join us.jpeg" alt="v2" /> */}
          <img src="/images/vision.jpg" alt="v3" />
          <img src="/images/mission.jpg" alt="v4" />
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="section team-section">
        <h2 className="gold center">Our Team</h2>

        <div className="team-card-row">
          {/* Founders row */}
          <div className="founders-card">
            <div className="founders-photos">
              <div className="circle-photo">
                <img src="/images/boss1.jpg" alt="Founder 1" />
                <h5>John Doe</h5>
                <p>Founder & CEO</p>
              </div>
              <div className="circle-photo">
                <img src="/images/boss1.jpg" alt="Founder 2" />
                <h5>Jane Smith</h5>
                <p>Co-Founder & CTO</p>
              </div>
            </div>
            <p className="founder-note">
              Our founders lead with vision and hands-on engineering — guiding product direction and quality.
            </p>
          </div>

          {/* Experts row */}
          <div className="experts-grid">
            <div className="expert-card">
              <img src="/images/expert.jpg" alt="Expert 1" />
              <h5>Ali Khan</h5>
              <p>UI/UX Designer</p>
            </div>
            <div className="expert-card">
              <img src="/images/expert.jpg" alt="Expert 2" />
              <h5>Riya Patel</h5>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES (styled like reference) */}
      <section className="values-section">
        <div className="values-inner">
          <div className="values-copy">
            <h2 className="gold">Why Work With Us</h2>
            <p className="lead">
              We combine strategy, design and engineering to deliver measurable
              business outcomes. Here’s what defines us:
            </p>
          </div>

          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">✓</div>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN / CAREERS */}
      <section className="section join-section">
        <div className="join-inner">
          <div>
            <h2 className="gold">Join Us</h2>
            <p className="lead">
              Want to build impactful products with a friendly, fast-moving team?
            </p>
            <button className="cta-btn">Work With Us</button>
          </div>
          <div className="join-stats">
            <div><strong>100+</strong><span>Projects</span></div>
            <div><strong>24/7</strong><span>Support</span></div>
            <div><strong>Remote</strong><span>Friendly</span></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
