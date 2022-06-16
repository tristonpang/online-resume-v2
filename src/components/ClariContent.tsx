import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import React from 'react';

import ImageGallery from 'react-image-gallery';

import {
  Box,
  createStyles,
  makeStyles,
} from '@material-ui/core';

import { clariContent } from '../data/clariContent';
import FilmLaughPhoto from '../resources/images/claritris_filmlaugh_50.jpg';
import UmbrellaPhoto from '../resources/images/claritris_umbrella_50.jpg';
import Section from './Section';

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
    backgroundColor: '#fff',
    paddingLeft: '20%',
    paddingRight: '20%',
    paddingTop: '10%',
    paddingBottom: '10%',
  },
  gallery: {
    width: '100%'
  }
}));

const images = [
  {
    original: UmbrellaPhoto,
    thumbnail: UmbrellaPhoto,
    originalHeight: 200,
    thumbnailHeight: 50,
  },
  {
    original: FilmLaughPhoto,
    thumbnail: FilmLaughPhoto,
    originalHeight: 200,
    thumbnailHeight: 50
  }
];

const ClariContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {/* TODO: add picture scroller here */}
      <ImageGallery additionalClass={classes.gallery} items={images}/>
      <Section id='content' sectionTitle='This is Clari...' content={clariContent} useEssayCards />
    </Box>
  );
};

export default ClariContent;