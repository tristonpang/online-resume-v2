import React, { useCallback } from 'react';
import './App.css';
import Particles from 'react-tsparticles';
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { isMobile } from 'react-device-detect';

import Intro from './components/Intro';
import Resume from './components/Resume';
import { createTheme, createStyles, makeStyles, ThemeProvider } from '@material-ui/core';
import About from './components/About';
import NavBar from './components/NavBar';
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles(() => createStyles({
  contentContainer: {
    paddingLeft: '16%',
    paddingRight: '16%',
  },
  particlesContainer: {
    zIndex: -10,
    position: "fixed",
  }

}));

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
  const classes = useStyles();
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
        className={classes.particlesContainer}
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
              enable: true,
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
      <div className={classes.contentContainer}>
        <Intro />
        <About />
        <Resume />
      </div>
    </ThemeProvider>
  );
}

export default App;
