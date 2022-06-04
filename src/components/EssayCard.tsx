import React from 'react';

import {
  Box,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';

export interface EssayCardProps {
  title: string;
  subtitle: string;
  content: string;
  date?: string;
}

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
  content: {
    marginTop: 16,
  }
}));

const EssayCard = (props: EssayCardProps) => {
  const { title, subtitle, content } = props;
  const classes = useStyles();
  const splitContent = content.split('\n');
  return (
    <Box className={classes.container}>
      <Typography variant='h5'><strong>{title}</strong></Typography>
      <Typography><em>{subtitle}</em></Typography>
      {splitContent.map((essayParagraph) => (
        <Typography className={classes.content} align='justify'>{essayParagraph}</Typography>
      ))}
    </Box>
  );
};

export default EssayCard;