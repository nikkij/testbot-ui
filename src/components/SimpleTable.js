import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { renderByOrder } from 'recharts/lib/util/ReactUtils';

const moment = require('moment');

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};
 
class SimpleTable extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      classes: props,
      data: [],
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_TESTBOT_URL+'/runs/?format=json')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  render() {

  const { classes } = this.state.classes;

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
            <TableCell align="right">Metrics</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                <a href="">{n.label}</a>
              </TableCell>
              <TableCell align="right">{n.status}</TableCell>
              <TableCell align="right">{n.duration}</TableCell>
              <TableCell align="right">{n.submitter}</TableCell>
              <TableCell align="right">{n.metrics}</TableCell>
              <TableCell align="right">{n.artifacts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
