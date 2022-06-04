import React from 'react';

import {
  Box,
  createStyles,
  makeStyles,
} from '@material-ui/core';

import { clariContent } from '../data/clariContent';
import Section from './Section';

const useStyles = makeStyles(() => createStyles({
  sectionTitle: {
    textDecoration: 'underline',
    marginBottom: 100
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingLeft: '20%',
    paddingRight: '20%',
    paddingTop: '10%',
    paddingBottom: '10%',
  }
}));

const ClariContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {/* TODO: add picture scroller here */}
      <Section id='content' sectionTitle='This is Clari...' content={clariContent} useEssayCards />
    </Box>
  );
};

export default ClariContent;