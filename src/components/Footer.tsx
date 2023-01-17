import React from 'react';
import { Box, Typography, IconButton } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.buttonContainer}>
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
      <Typography className={styles.title}>Triston Pang</Typography>
      <Typography className={styles.subtitle}>triston.dev</Typography>
    </Box>
  );
}

export default Footer;