import React from "react";
import "./ReachUs.css";

const ReachUs = () => {
  return (
    <div className="reach-container">
      {/* Hero Section */}
      <section className="reach-hero">
        <h1>Let’s Connect</h1>
        <p>We’d love to hear from you. Let’s build something amazing together.</p>
      </section>

      {/* Contact Info Section */}
      <section className="reach-info">
        <div className="info-card">
          <h3>📍 Address</h3>
         <p>
          Office 1: 105, Option Primo Premises, 
          Plot No. X-21, Marol Industrial Estate,
          MIDC Cross Rd, Andheri East,
          Mumbai, India
      <br/><br></br>
Office 2: 312 Crescent Business Square, 
Next to Skoda Showroom, Sakinaka, 
Kherani Road, Andheri East, 
Mumbai, India</p>
        </div>
        <div className="info-card">
          <h3>📞 Phone</h3>
          <p>+91 7597460456</p>
        </div>
        <div className="info-card">
          <h3>✉️ Email</h3>
          <p>faktarys@gmail.com</p>
        </div> 
      </section>

      {/* Contact Form */}
      <section className="reach-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Map Section */}
      {/* <section className="reach-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.197268446321!2d80.94615937509777!3d26.861397776692517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995750b8d01c63%3A0xd6c52e69f3b9d26a!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1697270099985!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section> */}

      {/* Footer CTA */}
      <section className="reach-cta">
        <h2>Ready to start your next project with us?</h2>
        <button>Get in Touch</button>
      </section>
    </div>
  );
};

export default ReachUs;
