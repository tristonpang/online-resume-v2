import React from 'react';

import {
  Box,
  Typography,
} from '@material-ui/core';

import styles from '../styles/ExperienceCard.module.css';

export interface ExperienceCardProps {
  image?: string;
  title: string;
  subtitle: string;
  duration: string;
  description?: string;
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { image, title, subtitle, duration, description } = props;
  return (
    <Box className={styles.container}>
      <Box className={styles.headerContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt='' />
        </div>
        <Box className={styles.titleContainer}>
          <Typography variant='h5'><strong>{title}</strong></Typography>
          <Typography><em>{subtitle}</em></Typography>
          <Typography>{duration}</Typography>
        </Box>
      </Box>
      <Typography className={styles.description}>{description}</Typography>
    </Box>
  );
};

export default ExperienceCard;