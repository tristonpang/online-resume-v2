import React from 'react';

import {
  Box,
  Typography,
} from '@material-ui/core';

import styles from '../styles/EssayCard.module.css';

export interface EssayCardProps {
  title: string;
  subtitle: string;
  content: string;
  date?: string;
}

const EssayCard = (props: EssayCardProps) => {
  const { title, subtitle, content } = props;
  const splitContent = content.split('\n');
  return (
    <Box className={styles.container}>
      <Typography className={styles.title} variant='h5'><strong>{title}</strong></Typography>
      <Typography><em>{subtitle}</em></Typography>
      {splitContent.map((essayParagraph) => (
        <Typography className={styles.content}>{essayParagraph}</Typography>
      ))}
    </Box>
  );
};

export default EssayCard;