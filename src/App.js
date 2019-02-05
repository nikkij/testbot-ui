import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import StatusCard from './components/StatusCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from './components/SimpleLineChart';
import SimpleTable from './components/SimpleTable';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class App extends Component {
  render() {
      const { classes } = this.props;
      return (
            <div className="root">
            <NavBar />
            <div className="vertical-spacer" />
              <div className={classes.content}>
              <Typography variant="h5" gutterBottom component="h3">
                Latest
              </Typography>
              <StatusCard></StatusCard>
              <br />
              <br />
              <br />
              <Typography variant="h5" gutterBottom component="h3">
                Run History
              </Typography>
              <SimpleLineChart />
              <br />
              <br />
              <SimpleTable />
            </div>
            </div>
    );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);
