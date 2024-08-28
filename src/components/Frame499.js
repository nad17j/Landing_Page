// Frame499.js
import React from 'react';
import Frame499_Frame92 from './Frame499_Frame92';
import image1 from './assets/image 1.png'; 


const Frame499 = () => {
    return (
      <div className="frame499">
        <div className="image1-container" style={{ position: 'absolute', top: 0, right: 0, width: '414px', height: '416px' }}>
          {/* Add an overlay with 50% light gray background */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'lightgray', opacity: 1.0 }}></div>
          <img src={image1} alt="Lens image" className="image1" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 'auto' }} />
        </div>
        <Frame499_Frame92 />
      </div>
    );
  };

export default Frame499;


