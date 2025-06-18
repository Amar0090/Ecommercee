import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <p>If You Looking for Something Else?</p>
        <form className="contact-form">
          <input type="text" placeholder="Name..." />
          <input type="email" placeholder="Email..." />
          <textarea placeholder="Message..." rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-image-section">
        <img
          src="src/assets/Text contact us lettering around support operator (1).png"
          alt="Contact Illustration"
          className="contact-image"
        />
      </div>
    </div>
  );
};

export default Contact;
