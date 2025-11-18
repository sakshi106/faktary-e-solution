import React, { useEffect, useState } from "react";
import "./contact.css";

const Contact = () => {
  const [animateHero, setAnimateHero] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setAnimateHero(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ UPDATED FETCH FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        // replace with http://localhost:8000 for local testing
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Failed to send message!");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Error connecting to server");
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="overlay"></div>
        <div className={`hero-content ${animateHero ? "animate" : ""}`}>
          <h1 className="style">
            Let’s <span>Connect and Innovate</span>
          </h1>
          <p>
            Have questions or need expert guidance? Reach out to us for tailored
            solutions that drive your business forward.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="info scroll-animate delay-1">
          <h2>Get in Touch</h2>
          <p>
            We’re here to help! Whether you need support, have a business inquiry,
            or want to explore partnership opportunities — connect with us.
          </p>

          <div className="info-item">
            <h4>Head Office</h4>
            <p>
              105, OPTION PRIMO PREMISES, PLOT NO. X-21, MAROL INDUSTRIAL ESTATE,
              MIDC CROSS RD, ANDHERI EAST
            </p>
          </div>

          <div className="info-item">
            <h4>Phone</h4>
            <p>
              +91 7597460456 <br /> +91 882 623 8429
            </p>
          </div>

          <div className="info-item">
            <h4>Email</h4>
            <p>faktarys@gmail.com</p>
          </div>
        </div>

        <div className="form-container scroll-animate delay-2">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
