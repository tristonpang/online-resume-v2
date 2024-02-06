import "./App.css"; // TODO: separate css files

import {
  ThemeProvider,
  createStyles,
  createTheme,
  makeStyles,
} from "@material-ui/core";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

import ClariAbout from "./components/ClariAbout";
import ClariContent from "./components/ClariContent";
import ClariIntro from "./components/ClariIntro";

import { useCallback } from "react";
import styles from "./styles/App.module.css";

const useStyles = makeStyles(() =>
  createStyles({
    contentContainer: {
      paddingLeft: "16%",
      paddingRight: "16%",
    },
  })
);

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    background: {
      default: "#000",
    },
  },
});

function Clari() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className={styles.particlesContainer}
        options={{
          fullScreen: {
            enable: true,
          },
          background: {
            color: {
              value: "#141E30",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
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
              speed: 0.15,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1000,
              },
              value: 200,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 2.5,
            },
          },
          detectRetina: true,
        }}
      />

      <div className={styles.contentContainer}>
        <ClariIntro />
        <ClariAbout />
        <ClariContent />
      </div>
    </ThemeProvider>
  );
}

export default Clari;
