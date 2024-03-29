import React from 'react';

import {
  Box,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';

import { ExperienceCardProps } from './ExperienceCard';

import styles from '../styles/ProjectCard.module.css';

const useStyles = makeStyles(() => createStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 64,
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  image: {
    width: '75%',
    marginBottom: 16
  },
  description: {
    marginTop: 16,
  }
}));

const ProjectCard = (props: ExperienceCardProps) => {
  const { image, title, subtitle, duration, description } = props;
  const classes = useStyles();
  return (
    <Box className={styles.container}>
      <img className={styles.image} src={image} alt='' />
      <Typography className={styles.title} variant='h5'><strong>{title}</strong></Typography>
      <Typography><em>{subtitle}</em>{'  |  ' + duration}</Typography>
      <Typography className={styles.description}>{description}</Typography>
    </Box>
  );
};

export default ProjectCard;