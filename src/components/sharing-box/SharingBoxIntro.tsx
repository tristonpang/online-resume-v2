import { useEffect, useState } from "react";

import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";

import { Box, Typography } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styles from "../../styles/Intro.module.css";

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

const SharingBoxIntro = () => {
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
          <div className={styles.typistContainer}>
            <FadeInName>
              <Typography className={`${styles.text} ${styles.subtitle}`}>
                Welcome to
              </Typography>
            </FadeInName>
          </div>
          <FadeInName className={`${styles.text} ${styles.name}`}>
            The Sharing Box
          </FadeInName>
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

export default SharingBoxIntro;
