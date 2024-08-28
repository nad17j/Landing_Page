// src/components/Frame500.js
import React from 'react';
import Logo from './assets/Logo.svg';


const Frame500 = () => {
  return (
    <div className="frame500">
      <img 
        src={Logo} 
        alt="Logo" 
        className="frame500-logo"
        style={{ width: '238.89px', height: '25px', alignSelf: 'flex-start', margin: '0'}} />
      <p className="frame500-text">
        Your goal is our target. Not anything in between. We use <br /> online marketing platforms and tools to achieve a single <br /> objective - your business results.
      </p>
    </div>
  );
};

export default Frame500;
