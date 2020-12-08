import classes from '*.module.css';
import { Box, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => createStyles({
  text: {
    color: '#fff',
    fontSize: 64,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: 1000, //testing
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      Testing
    </Box>
  );
};

export default Resume;