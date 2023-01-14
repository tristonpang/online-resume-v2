import React from 'react';

import {
  Box,
  Typography,
} from '@material-ui/core';

import EssayCard, { EssayCardProps } from './EssayCard';
import ExperienceCard, { ExperienceCardProps } from './ExperienceCard';
import ProjectCard from './ProjectCard';

import styles from '../styles/Section.module.css';

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
    <Box className={styles.container} id={id}>
      {props.sectionTitle !== '' && <Typography variant='h3' className={styles.sectionTitle}><strong>{sectionTitle}</strong></Typography>}
      {renderCards(content)}
      <hr className={styles.divider} />
    </Box>
  );
};

export default Section;