import React from 'react';
import { AppBar, Box, Button, IconButton, Slide, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-scroll';

import styles from '../styles/NavBar.module.css';

function AppearOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 400 });

  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

const NavBar = () => {
  return (
    <AppearOnScroll>
      <AppBar>
        <Toolbar className={styles.toolbar}>
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
              <Button className={styles.navButton}>About</Button>
            </Link>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Button className={styles.navButton}>Work Experience</Button>
            </Link>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Button className={styles.navButton}>Education</Button>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Button className={styles.navButton}>Projects</Button>
            </Link>
            <Link
              activeClass="active"
              to="proficiencies"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Button className={styles.navButton}>Proficiencies</Button>
            </Link>
          </Box>
          <Box className={styles.contactContainer}>
            <IconButton className={styles.buttonWrapper} href='mailto:pang.triston@gmail.com'>
              <MailIcon className={styles.button} />
            </IconButton>
            <IconButton className={styles.buttonWrapper} href='https://github.com/tristonpang'>
              <GitHubIcon className={styles.button} />
            </IconButton>
            <IconButton className={styles.buttonWrapper} href='https://www.linkedin.com/in/triston-pang/'>
              <LinkedInIcon className={styles.button} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </AppearOnScroll>
  );
};

export default NavBar;