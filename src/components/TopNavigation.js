// src/components/TopNavigation.js
import React, { useState } from 'react';
import Frame496 from './Frame496';
import LogoIcon from './assets/Logo.svg';
import ToggleIcon from './assets/Group 2.svg';

const TopNavigation = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const isMobile = window.innerWidth <= 710;
  
    return (
      <div className="top-navigation">
        {isMobile && (
          <button className="toggle-button" onClick={toggleMobileMenu}>
            <img src={ToggleIcon} alt="Toggle" className="toggle-icon" />
          </button>
        )}
        <img src={LogoIcon} alt="Logo" style={{ width: '238.889px', height: '25px', flexShrink: 0 }} />
        <Frame496 toggleMobileMenu={toggleMobileMenu} isOpen={isMobileMenuOpen} />
      </div>
    );
  };
  
  export default TopNavigation;