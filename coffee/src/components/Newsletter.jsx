import React, { useState } from "react";
import "./Newsletter.css";
import bgImage from "../assets/Images/coffee-land.jpg";
import wingsLeft from "../assets/Images/wingsleft.png";
import wingsRight from "../assets/Images/wingsright.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section
      className="newsletter"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Side Images */}
      <img src={wingsLeft} alt="left splash" className="cup left" />
      <img src={wingsRight} alt="right splash" className="cup right" />

      <div className="overlay">
        <div className="newsletter-content">
          <h2>Subscribe to get the Latest News</h2>
          <p>
            Don't miss out on our latest news, updates, tips and special offers
          </p>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;