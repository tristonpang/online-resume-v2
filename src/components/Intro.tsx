import React, {
  useEffect,
  useState,
} from 'react';

import { Link } from 'react-scroll';
import Typist from 'react-typist';
import styled, { keyframes } from 'styled-components';

import {
  Box,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styles from '../styles/Intro.module.css';

const flashAnimation = keyframes`
  50% {
    opacity: 0;
  }
`;
const FlashingName = styled(Typography)`
  animation: ${flashAnimation} 0.1s 3 linear;
`

const fadeInAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`

const FadeInArrow = styled(KeyboardArrowDownIcon)`
  animation: ${fadeInAnimation} 1s linear;
`

const Intro = () => {
  const [isRenderIntro, setIsRenderIntro] = useState<boolean>(false);
  const [isRenderArrow, setIsRenderArrow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsRenderIntro(true), 1000)
  }, []);

  useEffect(() => {
    setTimeout(() => setIsRenderArrow(true), 1500)
  }, []);

  return (
    <Box className={styles.container}>
      {isRenderIntro && (<>
        <FlashingName className={`${styles.text} ${styles.name} ${styles.name}`}>Triston Pang</FlashingName>
        <div className={styles.typistContainer}>
          <Typist cursor={{ element: '_' }}>
            <Typist.Delay ms={500} />
            <Typography className={`${styles.text} ${styles.subtitle}`}>Fullstack Software Developer</Typography>
          </Typist>
        </div>
      </>)}
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

export default Intro;