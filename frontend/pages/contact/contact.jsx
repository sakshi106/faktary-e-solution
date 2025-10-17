               // Contact.jsx (Single Centered Card Version)
import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>Got a great idea or looking for a partner? Reach out and let's talk.</p>
      </header>

      <div className="contact-center-card">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h2 className="form-title">Send a Message</h2>
          <div className="form-group">
            <label>Name*</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email*</label>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Phone*</label>
            <input type="tel" placeholder="Your Phone" required />
          </div>
          <div className="form-group">
            <label>Project Enquiry</label>
            <select>
              <option>General questions</option>
              <option>Hiring</option>
              <option>All Others</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message*</label>
            <textarea placeholder="Your Message" rows={5} required />
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Contact Details</h3>
          <p><strong>Phone:</strong> +91-141-404-5555</p>
          <p><strong>Email:</strong> hello@yourdomain.com</p>
          <p><strong>Partner With Us:</strong> Grow together with us.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;