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
import ClariContent from './components/ClariContent';
import ClariIntro from './components/ClariIntro';

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

function Clari() { // TODO: change background image to night sky if possible
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: '#000'
            }
            // image: './resources/images/star-bg.jpg'
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
            // modes: {
            //   bubble: {
            //     distance: 400,
            //     duration: 2,
            //     opacity: 0.8,
            //     size: 40,
            //   },
            //   push: {
            //     quantity: 4,
            //   },
            //   repulse: {
            //     distance: 200,
            //     duration: 0.4,
            //   },
            // },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "right",
              enable: true,
              outMode: "out",
              random: false,
              speed: 0.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
              // options: {
              //   image: {
              //     src: './resources/icons/star.jpg'
              //   }
              // }
            },
            size: {
              random: true,
              value: 2.5,
            },
          },
          detectRetina: true,
        }}
      />
      {/* <NavBar /> */}
      <div className={classes.contentContainer}>
        <ClariIntro />
        <About />
        <ClariContent />
      </div>
    </ThemeProvider>
  );
}

export default Clari;
