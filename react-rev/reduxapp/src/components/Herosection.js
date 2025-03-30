import React, { useState } from 'react';
import modelPink from '../images/1.jpg';
import modelGray from '../images/3.jpg';
import './Herosection.css';

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="models-container">
          <div className="model-left">
          <img src={modelPink} alt="Model 1" />
          </div>
          <div className="model-right">
            <img src={modelGray} alt="Model 2" />
          </div>
        </div>
        <div className="sale-container">
          <div className="sale-box">
            <p className="mid-season">MID-SEASON</p>
            <h1 className="sale-heading">SALE</h1>
            <p className="up-to">UP TO</p>
            <p className="discount">50% OFF</p>
          </div>
          <button className="shop-now-btn">SHOP NOW</button>
        </div>
        <div className="slider-dots">
          {[0, 1, 2, 3].map((index) => (
            <span 
              key={index}
              className={`dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;