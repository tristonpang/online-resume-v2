import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Typography, Box } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import Typist from 'react-typist';

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

const Intro = () => {
  const [isRenderIntro, setIsRenderIntro] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsRenderIntro(true), 1000)
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
    </Box>
  );
};

export default Intro;