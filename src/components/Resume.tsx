import { Box, createStyles, makeStyles, } from '@material-ui/core';
import React from 'react';

import Section from './Section';

import { education, projects, work } from '../data/content';
import Proficiencies from './Proficiencies';

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

const Resume = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Section id='work' sectionTitle='Work Experience' content={work} />
      <Section id='education' sectionTitle='Education' content={education} />
      <Section id='projects' sectionTitle='Projects & Extra-curricular' content={projects} useProjectCards />
      <Proficiencies />
    </Box>
  );
};

export default Resume;