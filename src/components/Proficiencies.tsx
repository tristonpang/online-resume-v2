import React from 'react';
import { createStyles, makeStyles, Typography } from '@material-ui/core';
import { programming, web, mobile, api, database, operatingSystems, spokenLanguages } from '../data/content';

import ProficiencyTable from './ProficiencyTable';

import styles from '../styles/Proficiencies.module.css';

const useStyles = makeStyles(() => createStyles({
  title: {
    marginBottom: 90
  },
}));

const Proficiencies = () => {
  const classes = useStyles();
  return (
    <>
      <Typography id='proficiencies' variant='h3' className={styles.title}><strong>Proficiencies</strong></Typography>
      <ProficiencyTable label='Programming' data={programming} />
      <ProficiencyTable label='Web' data={web} />
      <ProficiencyTable label='Mobile' data={mobile} />
      <ProficiencyTable label='API' data={api} />
      <ProficiencyTable label='Database' data={database} />
      <ProficiencyTable label='Operating Systems' data={operatingSystems} />
      <ProficiencyTable label='Spoken Languages' data={spokenLanguages} />
    </>
  );
};

export default Proficiencies;