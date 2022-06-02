import './App.css'; // TODO: separate css files

import React from 'react';

import Particles from 'react-tsparticles';

import {
  createMuiTheme,
  createStyles,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';

import About from './components/About';
import Intro from './components/Intro';
import NavBar from './components/NavBar';

const useStyles = makeStyles(() => createStyles({
  contentContainer: {
    paddingLeft: '16%',
    paddingRight: '16%',
  }

}));

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins',
  },
});

function Clari() { // TODO: change background to stars
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000",
            },
          },
          backgroundMode: {
            enable: true,
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
              outMode: "bounce",
              random: false,
              speed: 3,
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
      <NavBar />
      <div className={classes.contentContainer}>
        <Intro />
        <About />
      </div>
    </ThemeProvider>
  );
}

export default Clari;
