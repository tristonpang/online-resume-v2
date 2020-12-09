import React from 'react';
import './App.css';
import Particles from 'react-tsparticles';
import Intro from './components/Intro';
import Resume from './components/Resume';
import { createMuiTheme, createStyles, makeStyles, ThemeProvider } from '@material-ui/core';
import About from './components/About';

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

function App() {
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
      <div className={classes.contentContainer}>
        <Intro />
        <About />
        <Resume />
      </div>
    </ThemeProvider>
  );
}

export default App;
