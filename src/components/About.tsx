import React from 'react';
import { Box, createStyles, IconButton, makeStyles, Typography } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import styles from '../styles/About.module.css';

const About = () => {
  return (
    <Box className={styles.container} id='about'>
      <Box className={styles.textContainer}>
        <Typography variant='h4' className={`${styles.text} ${styles.title}`}>Hi there!</Typography>
        <Typography className={styles.text}>
          I am a software engineer with a specialisation in Software Engineering and Database Systems. Besides these fields, I have worked on a range of projects with differing requirements and skill sets.
          I have worked on software in both front-end and back-end developer roles, and have experience in setting up CI/CD pipelines and in some DevOps as well.
          <br />
          <br />
          As a full-stack software engineer, I am always up for challenges and projects that allow me to think on my feet, and I am always looking for opportunities to learn more and take on things that are new to me.
          I pick things up at a quick pace and it is very important for me to be constantly growing in my career.
        </Typography>
      </Box>
      <Box className={styles.contactContainer}>
        <IconButton className={styles.buttonWrapper} href='mailto:pang.triston@gmail.com'>
          <MailIcon className={styles.button} />
        </IconButton>
        <IconButton className={styles.buttonWrapper} href='https://github.com/tristonpang'>
          <GitHubIcon className={styles.button} />
        </IconButton>
        <IconButton className={styles.buttonWrapper} href='https://www.linkedin.com/in/triston-pang-8a8681170/'>
          <LinkedInIcon className={styles.button} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default About;