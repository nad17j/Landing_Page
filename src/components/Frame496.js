// src/components/Frame496.js
import React from 'react';
import Menu from './Menu';
import ToggleIcon from './assets/Group 2.svg';

const Frame496 = ({ toggleMobileMenu, isOpen }) => {
    const isMobile = window.innerWidth <= 710;
  
    return (
      <div className="frame496">
        {/* Your other content */}
        {isMobile && (
          <button className="toggle-button" onClick={toggleMobileMenu}>
            <img src={ToggleIcon} alt="Toggle" className="toggle-icon" />
          </button>
        )}
        {/* Conditionally render the Menu only if it's not a mobile screen or if the mobile menu is open */}
        {!isMobile || isOpen ? <Menu isMobile={isMobile && isOpen} /> : null}
      </div>
    );
  };
  
  export default Frame496;
