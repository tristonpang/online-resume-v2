import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import React from 'react';

import ImageGallery from 'react-image-gallery';

import {
  Box,
  createStyles,
  makeStyles,
} from '@material-ui/core';

import { clariContent } from '../data/clariContent';
import AlphabetPhoto from '../resources/images/claritris_alphabet.jpeg';
import BlackWhitePhoto from '../resources/images/claritris_blackwhite.jpeg';
import BrunchPhoto from '../resources/images/claritris_brunch.jpeg';
import CameraPhoto from '../resources/images/claritris_camera.jpeg';
import ChijmesPhoto from '../resources/images/claritris_chijmes.jpeg';
import ChristmasPhoto from '../resources/images/claritris_christmas.jpeg';
import DoughPhoto from '../resources/images/claritris_dough.jpeg';
import FilmLaughPhoto from '../resources/images/claritris_filmlaugh_50.jpg';
import FirstPhoto from '../resources/images/claritris_first.jpeg';
import GbtbPhoto from '../resources/images/claritris_gbtb.jpeg';
import BdayPhoto from '../resources/images/claritris_umbrella_50.jpg';
import UmbrellaPhoto from '../resources/images/claritris_umbrella_50.jpg';
// import GradPhoto from '../resources/images/claritris_grad.jpeg';
// import LungsPhoto from '../resources/images/claritris_lungs.jpeg';
// import MilligramPhoto from '../resources/images/claritris_milligram.jpeg';
// import PotteryPhoto from '../resources/images/claritris_pottery.jpeg';
// import Reflection1Photo from '../resources/images/claritris_reflection1.jpeg
// ';
// import Reflection2Photo from '../resources/images/claritris_reflection2.jpeg';
// import Reflection3Photo from '../resources/images/claritris_reflection3.jpeg';
// import Reflection4Photo from '../resources/images/claritris_reflection4.jpeg';
// import SelfiePhoto from '../resources/images/claritris_selfie.jpeg';
// import SelfieNaturePhoto from '../resources/images/claritris_selfienature.jpeg';
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
    width: '100%',
    marginBottom: '10%'
  }
}));

const images = [
  {
    original: UmbrellaPhoto,
    thumbnail: UmbrellaPhoto,
    originalHeight: 500,
    thumbnailHeight: 50,
  },
  {
    original: FilmLaughPhoto,
    thumbnail: FilmLaughPhoto,
    originalHeight: 500,
    thumbnailHeight: 50
  },
  {
    original: AlphabetPhoto,
    thumbnail: AlphabetPhoto,
    originalHeight: 500,
    thumbnailHeight: 50
  },
  {
    original: BdayPhoto,
    thumbnail: BdayPhoto,
    originalHeight: 500,
    thumbnailHeight: 50
  },
  {
    original: BlackWhitePhoto,
    thumbnail: BlackWhitePhoto,
    originalHeight: 500,
    thumbnailHeight: 50
  },
  {
    original: BrunchPhoto,
    thumbnail: BrunchPhoto,
    originalHeight: 500,
    thumbnailHeight: 50
  },
  {
    original: CameraPhoto,
    thumbnail: CameraPhoto,
    originalHeight: 500,
    thumbnailHeight: 50
  },
  {
    original: ChijmesPhoto,
    thumbnail: ChijmesPhoto,
    originalHeight: 500,
    thumbnailHeight: 50
  },
  {
    original: ChristmasPhoto,
    thumbnail: ChristmasPhoto,
    originalHeight: 500,
    thumbnailHeight: 50
  },
  {
    original: DoughPhoto,
    thumbnail: DoughPhoto,
    originalHeight: 500,
    thumbnailHeight: 50
  },
  {
    original: FirstPhoto,
    thumbnail: FirstPhoto,
    originalHeight: 500,
    thumbnailHeight: 50
  },
  {
    original: GbtbPhoto,
    thumbnail: GbtbPhoto,
    originalHeight: 500,
    thumbnailHeight: 50
  },
];

const ClariContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {/* TODO: add picture scroller here */}
      <ImageGallery additionalClass={classes.gallery} items={images} autoPlay />
      <Section id='content' sectionTitle='This is Clari...' content={clariContent} useEssayCards />
    </Box>
  );
};

export default ClariContent;