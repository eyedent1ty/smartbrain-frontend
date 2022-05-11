import React from 'react';
import Tilt from 'react-parallax-tilt';

import './Logo.css';
import brain from './brain.png';

const Logo = () => {
  return (
    <Tilt
      className="tilt ma4 mt0 br2 shadow-2"
      tiltMaxAngleX={55}
      tiltMaxAngleY={55}
    >
      <div className="logo-container">
        <img src={brain} alt="logo" />
      </div>
    </Tilt>
  );
};

export default Logo;
