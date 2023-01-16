import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

import styles from '../styles/ProficiencyTable.module.css';

interface ProficiencyTableProps {
  label: string;
  data: { skill: string; level: number }[];
}

const levelMapping: { [key: number]: string } = {
  1: 'Basic',
  2: 'Intermediate',
  3: 'Proficient',
}

const ProficiencyTable = (props: ProficiencyTableProps) => {
  const { label, data } = props;
  const renderDataRows = () => {
    return data.map(dataItem => (
      <TableRow>
        <TableCell align='left'>{dataItem.skill}</TableCell>
        <TableCell align='right'>{levelMapping[dataItem.level]}</TableCell>
      </TableRow>
    ));
  };

  return (
    <TableContainer elevation={3} component={Paper} className={styles.container}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} align="center">{label}</TableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>
          {renderDataRows()}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProficiencyTable;