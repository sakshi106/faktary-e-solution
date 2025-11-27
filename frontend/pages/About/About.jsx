import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  { title: "Accountability ", text: " focuses on responsibility and answerability." },
  { title: "Quality Driven", text: "We deliver reliable, tested solutions." },
  { title: "Agile", text: "Fast iterations, continuous improvements." },
];

const About = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((s) => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

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
  {/* 🎥 Background Video */}
  <video
    className="story-bg-video"
    src="/videos/bg.mp4"
    autoPlay
    muted
    loop
    playsInline
  ></video>

  {/* 🔹 Transparent Glass Card Content */}
  <div className="story-overlay"></div>

  <div className="story-content">
    <div className="glass-card">
      <h2 className="story-title">Our Story</h2>
      <p className="story-text">
        Faktary E-Solutions Private Limited is a leading IT company in Delhi, specializing in tailored technology solutions for diverse business needs.
        Born in 2020, Faktary E Solutions started as a small creative unit and
        has evolved into a full-stack digital powerhouse. We engineer
        experiences that fuel growth and simplify complexity for businesses
        worldwide. <br></br>
        Founded with a vision to revolutionize the tech landscape, Faktary E-Solutions began its journey in Delhi with a small but dedicated team focused on creating bespoke software solutions.
        <br />
        We have served clients across various industries including retail, finance, and healthcare, empowering them with technology that enhances efficiency and growth.

Faktary E-Solutions has been recognized for its excellence in innovation and service, receiving multiple awards in the tech industry.


      </p>


      <div className="story-journey">
        <h4>Our Journey</h4>
        <p>
          From a 2-person startup to delivering 100+ projects, our journey is
          driven by passion, collaboration, and real problem-solving.
        </p>
      </div>
    </div>
  </div>
</section>


{/* OUR TEAM */}
<section className="section team-section">
  <video
    className="team-bg-video"
    src="/videos/story.mp4"
    autoPlay
    muted
    loop
    playsInline
  ></video>

  <div className="team-overlay"></div>

  <div className="team-content">
    <h2 className="gold center">Our Team</h2>

    <div className="team-card-row">
      {/* Founder 1 */}
      <div className="team-card">
        <div className="team-card-inner">
          {/* Front Side */}
          <div className="team-card-front">
            {/* <img src="/images/boss1.jpg" alt="Founder 1" /> */}
            <h3>Preetham Jain</h3>
            <p>Director at Faktary E-Solutions Private Limited</p>
          </div>

          {/* Back Side */}
          <div className="team-card-back">
            <h3>Preetham Jain</h3>
            <p>
            Preetham Jain serves as a Director at Faktary E-Solutions Private Limited and brings over 4.5 years of experience in the information technology industry. With a strong command of modern digital solutions and emerging technologies, he plays a crucial role in defining the company’s strategic direction and technical excellence.
Preetham oversees key areas including product development, technological innovation, operational optimisation, and client-focused solution delivery. His analytical approach, clear leadership, and commitment to high standards contribute significantly to the organisation’s growth and performance.
He is dedicated to building scalable, efficient, and future-ready IT solutions that support the company’s mission of delivering dependable and high-value services to its clients.
Preetham also focuses on strengthening internal processes, enhancing team capabilities, and ensuring that the organisation maintains a competitive edge in a rapidly evolving digital landscape. His forward-thinking mindset continues to guide Faktary E-Solutions towards long-term sustainability and innovation.
            </p>
            <p className="exp">Expertise: Strategy, UX, Product Engineering</p>
          </div>
        </div>
      </div>

      {/* Founder 2 */}
      <div className="team-card">
        <div className="team-card-inner">
          {/* Front Side */}
          <div className="team-card-front">
            {/* <img src="/images/boss1.jpg" alt="Founder 2" /> */}
            <h3>Manveer Jain</h3>
            <p> Director at Faktary E-Solutions Private Limited</p>
          </div>

          {/* Back Side */}
          <div className="team-card-back">
            <h3>Manveer Jain</h3>
            <p>
             Manveer Jain serves as a Director at Faktary E-Solutions Private Limited, contributing over 3 years of experience in the IT sector. His expertise spans project management, digital solution implementation, and operational coordination across multiple client engagements.
He plays an important role in ensuring seamless project execution, maintaining service quality, and strengthening long-term client relationships. With a solutions-driven mindset and disciplined work approach, Manveer supports the organisation’s commitment to efficiency, innovation, and continuous improvement.
In addition to his operational responsibilities, Manveer actively works on refining delivery methodologies, improving workflow consistency, and enabling teams to meet evolving client expectations. His dedication to organisational excellence helps maintain Faktary E-Solutions’ reputation as a trusted and performance-focused technology partner.
            </p>
            <p className="exp">Expertise: Cloud, AI, Scalable Systems</p>
          </div>
        </div>
      </div>
    </div>

    <p className="founder-note">
      Our founders lead with vision, innovation, and hands-on engineering
      excellence.
    </p>
  </div>
</section>


      {/* VALUES */}
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

      {/* JOIN */}
      <section className="section join-section">
        <div className="join-inner">
          <div>
            <h2 className="gold">Join Us</h2>
            <p className="lead">
              Want to build impactful products with a friendly, fast-moving team?
            </p>
            <button className="cta-btn" onClick={() => navigate("/contact")}>
              Work With Us
            </button>
          </div>
          <div className="join-stats">
            <div>
              <strong>100+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>
            <div>
              <strong>Remote</strong>
              <span>Friendly</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
