import React from 'react';

import {
  Box,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';

import EssayCard, { EssayCardProps } from './EssayCard';
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
  content: ExperienceCardProps[] | EssayCardProps[];
  useProjectCards?: boolean;
  useEssayCards?: boolean;
  rawRenderContent?: React.Component;
}

const Section = (props: SectionProps) => {
  const { sectionTitle, content, useProjectCards, id, useEssayCards } = props;
  const classes = useStyles();

  const renderCards = (contentList: ExperienceCardProps[] | EssayCardProps[]) => {
    if (useProjectCards) {
      return (contentList as ExperienceCardProps[]).map((contentItem) => (
        <ProjectCard image={contentItem.image} title={contentItem.title} subtitle={contentItem.subtitle} duration={contentItem.duration} description={contentItem.description} />
      ));  
    }
    if (useEssayCards) {
      return (contentList as EssayCardProps[]).map((contentItem) => (
        <EssayCard title={contentItem.title} subtitle={contentItem.subtitle} content={contentItem.content} />
      ));
    }
    return (contentList as ExperienceCardProps[]).map((contentItem: ExperienceCardProps) => (
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