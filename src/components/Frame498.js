// Frame498.js
import React from 'react';
import Frame92 from './Frame92';
import image2 from './assets/image 2.png'; 


const Frame498 = () => {
  return (
    <div className="frame498">
      <div className="image2" style={{ background: `url(${image2}) no-repeat`, width: '414px', height: '414px', position: 'relative' }}>
        {/* Add an overlay with 50% light gray background */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'lightgray', opacity: 1.0 }}>
        <img src={image2} alt="Desktop image" className="image2" />
        </div>
      </div>
      <Frame92 />
    </div>
  );
};


export default Frame498;

