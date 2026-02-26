import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">

      {/* Dark Overlay */}
      <div className="footer-overlay"></div>

      <div className="container footer-container">
        <div className="footer-content">

          {/* Left Section */}
          <div className="footer-section">
          <h2 className="footer-brand"style={{ fontFamily: "'Clicker Script', cursive" }}>Bean Scene</h2>
            <p className="footer-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* About */}
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">News & Blogs</a></li>
              <li><a href="#">Help & Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">How we work</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={15} />
                <span>Akshya Nagar 1st Block 1st Cross, Ramamurthy Nagar, Bangalore-560016</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+1 202-918-2132</span>
              </li>
              <li>
                <Mail size={18} />
                <span>beanscene@email.com</span>
              </li>
              <li>
                <Globe size={18} />
                <span>www.beanscene.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Bean Scene. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;