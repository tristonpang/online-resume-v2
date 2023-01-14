import { Box } from '@material-ui/core';
import React from 'react';

import Section from './Section';

import { education, projects, work } from '../data/content';
import Proficiencies from './Proficiencies';

import styles from '../styles/Resume.module.css';

const Resume = () => {
  return (
    <Box className={styles.container}>
      <Section id='work' sectionTitle='Work Experience' content={work} />
      <Section id='education' sectionTitle='Education' content={education} />
      <Section id='projects' sectionTitle='Projects & Extra-curricular' content={projects} useProjectCards />
      <Proficiencies />
    </Box>
  );
};

export default Resume;