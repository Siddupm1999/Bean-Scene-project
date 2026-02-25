import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Discover from './components/Discover';
import MorningSection from './components/MorningSection';
import Flavors from './components/Flavors';
import WhyDifferent from './components/WhyDifferent';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Discover />
      <Flavors />
      <WhyDifferent />
      <MorningSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;