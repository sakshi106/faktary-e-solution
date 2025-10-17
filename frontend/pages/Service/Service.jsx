



import React from "react";
import "./Service.css";
import heroBg from "/assets/sevice.jpg";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "Website & Mobile Development",
    img: "/assets/web.jpg",
    short:
      "High-performing, scalable and user-friendly websites & apps for your business.",
    long:
      "We build responsive, fast, and interactive web and mobile applications tailored to your brand. From UI/UX design to backend integration — we ensure smooth digital experiences.",
    link: "/webdev", // internal route
  },
  {
    id: 2,
    title: "E-Commerce Solution",
    img: "/assets/e.jpg",
    short: "Grow your business with powerful online marketing strategies.",
    long:
      "Our experts craft SEO, SEM, and social media campaigns that enhance your reach, boost engagement, and increase conversions.",
    link: "/ecom",
  },
  {
    id: 3,
    title: "Digital Design & Branding",
    img: "/assets/3.jpg",
    short: "Create a brand that truly speaks to your audience.",
    long:
      "From logo design to brand guidelines — we help you create a consistent and memorable identity that stands out.",
    link: "/digital",
  },
  {
    id: 4,
    title: "Digital Marketing",
    img: "/assets/4.jpg",
    short: "Create a brand that truly speaks to your audience.",
    long:
      "From logo design to brand guidelines — we help you create a consistent and memorable identity that stands out.",
    link: "/marketing",
  },
  {
    id: 5,
    title: "IT Support & Maintenance",
    img: "/assets/5.jpg",
    short: "Create a brand that truly speaks to your audience.",
    long:
      "From logo design to brand guidelines — we help you create a consistent and memorable identity that stands out.",
    link: "/it-support",
  },
];

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="service-page">
      {/* HERO SECTION */}
      <section
        className="service-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>
            We transform possibilities into powerful digital realities shaping
            brands that lead, connect, and inspire the world.
          </p>
          <button
            className="hero-btn"
            onClick={() =>
              window.scrollTo({ top: 800, behavior: "smooth" })
            }
          >
            Explore Services
          </button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-list">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`service-item ${index % 2 === 0 ? "normal" : "reverse"}`}
          >
            <div className="service-img">
              <img src={service.img} alt={service.title} />
            </div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p className="short">{service.short}</p>
              <p className="long">{service.long}</p>
              <button
                className="service-btn"
                onClick={() => navigate(service.link)}
              >
                More About →
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Service;
