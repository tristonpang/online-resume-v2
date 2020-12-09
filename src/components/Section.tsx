import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import ExperienceCard, { ExperienceCardProps } from './ExperienceCard';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles(() => createStyles({
  sectionTitle: {
    textDecoration: 'underline',
    marginBottom: 100
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 100
  }
}));

interface SectionProps {
  sectionTitle: string;
  content: ExperienceCardProps[];
  useProjectCards?: boolean;
}

const Section = (props: SectionProps) => {
  const { sectionTitle, content, useProjectCards } = props;
  const classes = useStyles();

  const renderCards = (contentList: ExperienceCardProps[]) => {
    if (useProjectCards) {
      return contentList.map((contentItem) => (
        <ProjectCard image={contentItem.image} title={contentItem.title} subtitle={contentItem.subtitle} duration={contentItem.duration} description={contentItem.description} />
      ));  
    }
    return contentList.map((contentItem) => (
      <ExperienceCard image={contentItem.image} title={contentItem.title} subtitle={contentItem.subtitle} duration={contentItem.duration} description={contentItem.description} />
    ));
  }

  return (
    <Box className={classes.container}>
      <Typography variant='h3' className={classes.sectionTitle}><strong>{sectionTitle}</strong></Typography>
      {renderCards(content)}
    </Box>
  );
};

export default Section;