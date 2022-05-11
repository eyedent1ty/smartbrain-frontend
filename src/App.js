import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Library that needed for particles
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

import './App.css';

// Props for Particles
const particlesProps = {
  id: 'tsparticles',
  className: 'particles',
  init: async main => {
    await loadFull(main);
  },
  options: {
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: '#ffffff'
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce'
        },
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: { min: 1, max: 5 }
      }
    },
    detectRetina: true
  }
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          <Particles {...particlesProps} />,
          document.getElementById('particles')
        )}
        <div className="App">
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm />
          {/* <FaceRecognition /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
