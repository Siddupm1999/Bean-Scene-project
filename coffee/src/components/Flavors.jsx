import React from 'react';
import './Flavors.css';
import coffee1 from '../assets/Images/coffee1.jpg';
import coffee2 from '../assets/Images/coffee2.jpg';
import coffee3 from '../assets/Images/coffee3.jpg';
import coffee4 from '../assets/Images/coffee4.jpg';
const flavors = [
  { 
    name: 'Cappuccino', 
    coffee: 50, 
    milk: 50, 
    price: '$8.50', 
    image: coffee1
  },
  { 
    name: 'Chai Latte', 
    coffee: 50, 
    milk: 50, 
    price: '$7.25', 
    image: coffee2
  },
  { 
    name: 'Macchiato', 
    coffee: 50, 
    milk: 50, 
    price: '$6.75', 
   image: coffee3
  },
  { 
    name: 'Espresso', 
    coffee: 50, 
    milk: 50, 
    price: '$5.99', 
    image: coffee4
  }
];

const Flavors = () => {
  return (
    <section id="menu" className="flavors">
      <div className="container">
        <h2 className="section-title">Enjoy a new blend of coffee style</h2>
        <p className="section-subtitle">
          Explore all flavours of coffee with us. There is always a new cup worth experiencing
        </p>

        <div className="flavors-grid">
          {flavors.map((flavor, index) => (
            <div key={index} className="flavor-card">
              <img 
                src={flavor.image} 
                alt={flavor.name} 
                className="flavor-image" 
              />
              <h3 className="flavor-name">{flavor.name}</h3>
              <div className="flavor-ratio">
                <span>Coffee {flavor.coffee}%</span>
                <span>|</span>
                <span>Milk {flavor.milk}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flavors;