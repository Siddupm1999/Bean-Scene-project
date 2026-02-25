import React from 'react';
import seed1 from '../assets/Images/seed1.png';
import high from '../assets/Images/high.png';
import Coffextr from '../assets/Images/Coffextr.png';
import price from '../assets/Images/price.png';
import './WhyDifferent.css';

const features = [
  {
    icon: seed1,
    title: 'Supreme Beans',
    description: 'Beans that provide great taste'
  },
  {
    icon: high,
    title: 'High Quality',
    description: 'We provide the highest quality'
  },
  {
    icon: Coffextr,
    title: 'Extraordinary',
    description: 'Coffee like you have never tasted'
  },
  {
    icon: price,
    title: 'Affordable Price',
    description: 'Our coffee prices are easy to afford'
  }
];

const WhyDifferent = () => {
  return (
    <section className="why-different">
      <div className="container">
        <h2 className="section-title">Why are we different?</h2>
        <p className="section-subtitle">
          We don’t just make your coffee, we make your day!
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h3 className="cta-title">
            Great ideas start with great coffee, Let’s help you achieve that
          </h3>
          <button className="btn cta-btn">
            Get started today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;