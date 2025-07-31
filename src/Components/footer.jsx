import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import '../Styles/footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section logo-section">
          <div className="logo">
            <span className="logo-text">Mindwell</span>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, fugiat consequuntur aut repellat ad minus eos quo illum accusamus suscipit.</p>
          <div className="social-icons">
            <i><FaFacebook /></i>
            <i><FaInstagram /></i>
            <i><FaTwitter /></i>
            <i><FaLinkedin /></i>
          </div>
        </div>

        
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Account</li>
            <li>Support</li>
            <li>Feedback</li>
            <li>Accesibility</li>
          </ul>
        </div>

          
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li>Terms Of Services</li>
            <li>Privacy Policy</li>
            <li>About Us</li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <ul>
            <li>mindwell@gmail.com</li>
            <li>Kolkata, India</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Created by <strong>Code Whisperers</strong> · All rights reserved · © {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
