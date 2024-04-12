import React from "react";
import './All.css';
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <Header />
      <div className="container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <br />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
            <br />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
