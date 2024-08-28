// HeroSection.js
import React from 'react';
import Frame497 from './Frame497'; // Create Frame497 component
import Button from './Button';
import heroImage from './assets/Hero Image.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-image" style={{ backgroundImage: `url(${heroImage})`, width: '100%' }}>
        {/* Background layer */}
        <div className="background-layer">
            <img src={heroImage} alt="Cover Image" className="hero-image" />
        </div>
        {/* Frame497 */}
        <Frame497 />
        
      </div>
    </div>
  );
};

export default HeroSection;
