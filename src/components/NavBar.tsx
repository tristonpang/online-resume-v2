import React from 'react';
import { AppBar, Box, createStyles, IconButton, makeStyles, Slide, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppearOnScroll>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Triston Pang</Typography>
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