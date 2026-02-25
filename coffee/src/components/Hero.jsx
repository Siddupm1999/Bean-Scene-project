import React from 'react';
import './Hero.css';
import bgImage from '../assets/Images/BG-img.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(#1E1E1E,#00000000), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-overlay">
        <div className="container hero-content">
          <p className="hero-pre-title">
            We've got your morning covered with
          </p>

          <h1 className="hero-title" style={{ fontFamily: "'Clicker Script', cursive" }}>Coffee</h1>

          <p className="hero-description">
            It is best to start your day with a cup of coffee. Discover the
            best flavours coffee you will ever have. We provide the best
            for our customers.
          </p>

          <button className="btn hero-btn">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;