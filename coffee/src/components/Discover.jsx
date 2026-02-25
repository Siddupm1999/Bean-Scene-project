import React from 'react';
import './Discover.css';
import seeds from '../assets/Images/seeds.jpg';
const Discover = () => {
  return (
    <section className="discover">
      <div className="container discover-content">
        <div className="discover-text">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Discover the best coffee</h2>
          <p className="discover-description">
            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your 
            productivity and helps build your mood. Having a cup of coffee is good, but having a cup 
            of real coffee is greater. There is no doubt that you will enjoy this coffee more than 
            others you have ever tasted.
          </p>
          <button className="btn discover-btn">Learn More</button>
        </div>
        <div className="discover-image">
           <img 
            src={seeds}
            alt="Coffee beans"
          />
        </div>
      </div>
    </section>
  );
};

export default Discover;