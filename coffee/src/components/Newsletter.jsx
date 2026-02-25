import React, { useState } from 'react';
import './Newsletter.css';
import bgImage from '../assets/Images/coffee-land.jpg';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <section
      className="newsletter"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="newsletter-overlay">
        <div className="container newsletter-content">

          <h2 className="newsletter-title">
            Subscribe to get the Latest News
          </h2>

          <p className="newsletter-subtitle">
            Don't miss out on our latest news, updates, tips and special offers
          </p>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;