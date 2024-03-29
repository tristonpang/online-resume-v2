import React, { useCallback } from 'react';
import './App.css';
import Particles from 'react-tsparticles';
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { isMobile } from 'react-device-detect';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, createStyles, makeStyles, ThemeProvider } from '@material-ui/core';

import Intro from './components/Intro';
import Resume from './components/Resume';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import styles from './styles/App.module.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
  palette: {
    background: {
      default: '#000',
    }
  }
});

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className={styles.particlesContainer}
        options={{
          fullScreen: {
            enable: true
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      {!isMobile && <NavBar />}
      <div className={styles.contentContainer}>
        <Intro />
        <About />
        <Resume />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
