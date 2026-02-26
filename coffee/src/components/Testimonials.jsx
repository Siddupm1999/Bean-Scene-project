import React from "react";
import { Star } from "lucide-react";
import "./Testimonials.css";
import photo from "../assets/Images/photo.jpg";
import splashTop from "../assets/Images/splash-top.png";     // 2nd image (rotated)
import splashBottom from "../assets/Images/splash-bottom.png"; // 1st image

const Testimonials = () => {
  return (
    <section className="testimonials">
      {/* Splash Images */}
      <img src={splashTop} alt="coffee splash" className="splash splash-top" />
      <img src={splashBottom} alt="coffee splash" className="splash splash-bottom" />

      <div className="container">
        <h2 className="section-title">Our coffee perfection feedback</h2>
        <p className="section-subtitle">
          Our customers has amazing things to say about us
        </p>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
              ))}
            </div>

            <p className="testimonial-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s...
            </p>

            <div className="testimonial-author">
              <img src={photo} alt="Jonny Thomas" className="author-img" />
              <h4>Jonny Thomas</h4>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;