import React from 'react';
import { createStyles, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

interface ProficiencyTableProps {
  label: string;
  data: { skill: string; level: number }[];
}

const levelMapping: { [key: number]: string } = {
  1: 'Basic',
  2: 'Intermediate',
  3: 'Proficient',
}

const useStyles = makeStyles(() => createStyles({
  container: {
    marginBottom: 36,
  },
}));

const ProficiencyTable = (props: ProficiencyTableProps) => {
  const { label, data } = props;
  const classes = useStyles();
  const renderDataRows = () => {
    return data.map(dataItem => (
      <TableRow>
        <TableCell align='left'>{dataItem.skill}</TableCell>
        <TableCell align='right'>{levelMapping[dataItem.level]}</TableCell>
      </TableRow>
    ));
  };

  return (
    <TableContainer elevation={3} component={Paper} className={classes.container}>
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