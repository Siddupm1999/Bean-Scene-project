import React, { useState } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container container">
        <div className="nav-logo">
          <Coffee className="logo-icon" />
          <span style={{ fontFamily: "'Clicker Script', cursive" }}>Bean Scene</span>
        </div>

        {/* Center Navigation Links */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Auth Buttons on the Left */}
        <div className="nav-auth">
          <button className="btn-auth signin">Sign in</button>
          <button className="btn-auth signup">Sign Up</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#menu" onClick={() => setIsOpen(false)}>Menu</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
        <div className="mobile-auth">
          <button className="btn-auth signin">Sign in</button>
          <button className="btn-auth signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;