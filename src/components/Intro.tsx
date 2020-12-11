import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Typography, Box } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import Typist from 'react-typist';
import { Link } from 'react-scroll';
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

  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {isRenderIntro && (<>
        <FlashingName className={`${classes.text} ${classes.name}`}>Triston Pang</FlashingName>
        <div className={classes.typistContainer}>
          <Typist cursor={{ element: '_' }}>
            <Typist.Delay ms={500} />
            <Typography className={`${classes.text} ${classes.subtitle}`}>Full-stack Software Developer</Typography>
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

export default Intro;