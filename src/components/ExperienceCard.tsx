import React from 'react';

import {
  Box,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';

export interface ExperienceCardProps {
  image?: string;
  title: string;
  subtitle: string;
  duration: string;
  description?: string;
}

const useStyles = makeStyles(() => createStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 64,
    // backgroundColor: 'red',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  image: {
    width: '75%',
  },
  imageContainer: {
    width: '30%',
  },
  titleContainer: {
    width: '70%',
  }
}));

const ExperienceCard = (props: ExperienceCardProps) => {
  const { image, title, subtitle, duration, description } = props;
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.headerContainer}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} alt='' />
        </div>
        <Box className={classes.titleContainer}>
          <Typography variant='h5'><strong>{title}</strong></Typography>
          <Typography><em>{subtitle}</em></Typography>
          <Typography>{duration}</Typography>
        </Box>
      </Box>
      <Typography align='justify'>{description}</Typography>
    </Box>
  );
};

export default ExperienceCard;