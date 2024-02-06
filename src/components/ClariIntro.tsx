import { useEffect, useState } from "react";

import { Link } from "react-scroll";
import Typist from "react-typist";
import styled, { keyframes } from "styled-components";

import { Box, Typography } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styles from "../styles/Intro.module.css";

const fadeInAnimation = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;

const FadeInName = styled(Typography)`
  animation: ${fadeInAnimation} 1s linear;
`;

const FadeInArrow = styled(KeyboardArrowDownIcon)`
  animation: ${fadeInAnimation} 1s linear;
`;

const ClariIntro = () => {
  const [isRenderIntro, setIsRenderIntro] = useState<boolean>(false);
  const [isRenderArrow, setIsRenderArrow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsRenderIntro(true), 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsRenderArrow(true), 1500);
  }, []);

  return (
    <Box className={styles.container}>
      {isRenderIntro && (
        <>
          <FadeInName className={`${styles.text} ${styles.name}`}>
            Clari
          </FadeInName>
          <div className={styles.typistContainer}>
            <Typist cursor={{ element: "" }}>
              <Typist.Delay ms={500} />
              <Typography className={`${styles.text} ${styles.subtitle}`}>
                My irreplaceable joy and blessing
              </Typography>
            </Typist>
          </div>
        </>
      )}
      {isRenderArrow && (
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={styles.arrowButton}
        >
          <FadeInArrow className={styles.arrow} />
        </Link>
      )}
    </Box>
  );
};

export default ClariIntro;
