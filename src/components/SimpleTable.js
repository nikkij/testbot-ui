import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(runid, status, duration, submitter, artifacts) {
  id += 1;
  return { id, runid, status, duration, submitter, artifacts };
}

const data = [
  createData('astrotest:34bh3', 'Success', '2.5 hours', 'astrotest', 'artifacts'),
  createData('astrotest:skdj8', 'Failed', '12 minutes', 'astrotest', 'artifacts'),
  createData('vizpath:34ngdk', 'Success', '3.15 hours', 'vizpath', 'artifacts'),
  createData('cupcake:1286z', 'Success', '2.8 hours', 'cupcake', 'artofacts'),
  createData('robot1:8445n', 'Success', '3.1 hours', 'robot1', 'artifacts'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Test Run</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Submitter</TableCell>
            <TableCell align="right">Artifacts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.runid}
              </TableCell>
              <TableCell align="right">{n.status}</TableCell>
              <TableCell align="right">{n.duration}</TableCell>
              <TableCell align="right">{n.submitter}</TableCell>
              <TableCell align="right">{n.artifacts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
