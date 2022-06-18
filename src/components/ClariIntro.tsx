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

const useStyles = makeStyles(() => createStyles({
  name: {
    fontSize: '8em',
  },
  subtitle: {
    fontSize: '2em',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
  },
  typistContainer: {
    height: 20,
  },
  arrowButton: {
    position: 'absolute',
    top: '85vh',
  },
  arrow: {
    color: '#fff',
    fontSize: 64,
  }
}));

const fadeInAnimation = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`

const FadeInName = styled(Typography)`
  animation: ${fadeInAnimation} 1s linear;
`

const FadeInArrow = styled(KeyboardArrowDownIcon)`
  animation: ${fadeInAnimation} 1s linear;
`

const ClariIntro = () => {
  const [isRenderIntro, setIsRenderIntro] = useState<boolean>(false);
  const [isRenderArrow, setIsRenderArrow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsRenderIntro(true), 1000)
  }, []);

  useEffect(() => {
    setTimeout(() => setIsRenderArrow(true), 1500)
  }, []);

  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {isRenderIntro && (<>
        <FadeInName className={`${classes.text} ${classes.name}`}>Clari</FadeInName>
        <div className={classes.typistContainer}>
          <Typist cursor={{ element: '_' }}>
            <Typist.Delay ms={500} />
            <Typography className={`${classes.text} ${classes.subtitle}`}>My irreplaceable joy and blessing</Typography>
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
          className={classes.arrowButton}
        >
          <FadeInArrow className={classes.arrow} />
        </Link>
      )}
    </Box>
  );
};

export default ClariIntro;