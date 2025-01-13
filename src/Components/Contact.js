import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import './Contact.css'; 

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <span className="contact-text">nailya@hotmail.co.uk</span>
      </div>
      <div className="contact-item">
        <FaPhoneAlt className="contact-icon" />
        <span className="contact-text">+358406262021</span>
      </div>
      <div className="contact-item">
        <FaLinkedin className="contact-icon" />
        <a className="contact-text" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">linkedin.com/in/nailya-philippova</a>
      </div>
      <div className="contact-item">
        <FaGithub className="contact-icon" />
        <a className="contact-text" href="https://github.com/nailaphilip">github.com/nailaphilip</a>
      </div>
    </section>
  );
};

export default Contact;
