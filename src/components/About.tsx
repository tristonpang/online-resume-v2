import React from 'react';
import { Box, createStyles, IconButton, makeStyles, Typography } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
    marginBottom: 16,
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

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.textContainer}>
        <Typography variant='h4' className={`${classes.text} ${classes.title}`}>Hi there!</Typography>
        <Typography className={classes.text}>
          I am a final year Computer Science undergraduate from the National University of Singapore (NUS). While I formally specialise in Software Engineering and Database Systems, I have worked on a range of projects with differing requirements and skill sets.
          I have worked on software in both front-end and back-end developer roles, and have experience in setting up CI/CD pipelines and in some DevOps as well.
          <br />
          <br />
          As a full-stack software engineer, I am always up for challenges and projects that allow me to think on my feet, and I am always looking for opportunities to learn more and take on things that are new to me.
          I pick things up at a quick pace and it is very important for me to be constantly growing in my career.
        </Typography>
      </Box>
      <Box className={classes.contactContainer}>
        <IconButton className={classes.buttonWrapper} href='mailto:pang.triston@gmail.com'>
          <MailIcon className={classes.button} />
        </IconButton>
        <IconButton className={classes.buttonWrapper} href='https://github.com/tristonpang'>
          <GitHubIcon className={classes.button} />
        </IconButton>
        <IconButton className={classes.buttonWrapper} href='https://www.linkedin.com/in/triston-pang-8a8681170/'>
          <LinkedInIcon className={classes.button} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default About;