// src/components/Menu.js
import React from 'react';

const Menu = ({ isMobile }) => {
  return (
    <div className={`menu ${isMobile ? 'mobile-menu' : 'desktop-menu'}`}>
      <ul>
        <li>SERVICES</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
        <li>CAREERS</li>
      </ul>
    </div>
  );
};

export default Menu;
