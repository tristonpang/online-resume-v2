import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import ExperienceCard, { ExperienceCardProps } from './ExperienceCard';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles(() => createStyles({
  sectionTitle: {
    marginBottom: 90
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 100
  },
  divider: {
    color: '#000',
    backgroundColor: '#000',
    height: 1,
    width: '90%',
  }
}));

interface SectionProps {
  id: string;
  sectionTitle: string;
  content: ExperienceCardProps[];
  useProjectCards?: boolean;
}

const Section = (props: SectionProps) => {
  const { sectionTitle, content, useProjectCards, id } = props;
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
    <Box className={classes.container} id={id}>
      <Typography variant='h3' className={classes.sectionTitle}><strong>{sectionTitle}</strong></Typography>
      {renderCards(content)}
      <hr className={classes.divider} />
    </Box>
  );
};

export default Section;