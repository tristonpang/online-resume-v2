import React from 'react';
import { AppBar, Box, Button, createStyles, IconButton, makeStyles, Slide, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link, animateScroll as scroll } from 'react-scroll';

function AppearOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 400 });

  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles(() => createStyles({
  contactContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginLeft: 0,
  },
  button: {
    color: '#fff',
    fontSize: 25,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#212121',
    elevation: 3,
  },
  navButton: {
    color: '#fff',
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppearOnScroll>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Triston Pang</Typography>
          <Box>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <Button className={classes.navButton}>About</Button>
            </Link>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Button className={classes.navButton}>Work Experience</Button>
            </Link>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Button className={classes.navButton}>Education</Button>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Button className={classes.navButton}>Projects</Button>
            </Link>
            <Link
              activeClass="active"
              to="proficiencies"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Button className={classes.navButton}>Proficiencies</Button>
            </Link>
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
        </Toolbar>
      </AppBar>
    </AppearOnScroll>
  );
};

export default NavBar;