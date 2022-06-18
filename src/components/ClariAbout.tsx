import React from 'react';

import {
  Box,
  createStyles,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(() => createStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 3,
    backgroundColor: '#212121',
    paddingLeft: '16%',
    paddingRight: '16%',
    paddingTop: '5%',
    paddingBottom: '5%'
  },
  text: {
    color: '#fff',
  },
  title: {
    marginBottom: 24,
  },
  textContainer: {
    marginBottom: 36,
  },
  contactContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  buttonWrapper: {
    marginLeft: 16,
  },
  button: {
    color: '#fff',
    fontSize: 35,
  }
}));

const ClariAbout = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container} id='about'>
      <Box className={classes.textContainer}>
        <Typography variant='h4' className={`${classes.text} ${classes.title}`}>Hello there!</Typography>
        <Typography className={classes.text}>
          If you are Clari, hi honey!!! Please ignore this section first ok, you can read below first then if you want come back hehe.
          <br />
          <br />
          Otherwise, hi there! You have stumbled upon this page that I have made for a very important girl in my life. Her name is Clari, and I have made attached this page to my domain (triston.dev) to symbolise that she will always be a part of my life :)
        </Typography>
      </Box>
      <Box className={classes.contactContainer}>
        <IconButton className={classes.buttonWrapper} href='https://www.instagram.com/clarigraphy.art/'>
          <InstagramIcon className={classes.button} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ClariAbout;