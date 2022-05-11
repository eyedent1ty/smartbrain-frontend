import React from 'react';

import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="tilt br2 shadow-2" tiltMaxAngleY={55} tiltMaxAngleX={55}>
        <img
          src={brain}
          className="logo"
          alt="logo"
          width="150px"
          height="150px"
        />
      </Tilt>
    </div>
  );
};

export default Logo;
