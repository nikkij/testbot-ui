import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import {createRun} from '../Actions';

const capitalize = require('capitalize');
const moment = require('moment');
const styles = theme => ({
    card: {
        display: 'flex',
        borderColor: 'red',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    title: {
        color: 'red',
    },
    statusGreen: {
        color: 'green',
    },
    statusRed: {
        color: 'red',
    },
    button: {
        margin: theme.spacing.unit,
    }
});

class StatusCard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          classes: props,
          data: {
              status: "",
          },
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_TESTBOT_URL+'/runs/latest/?format=json')
          .then(response => response.json())
          .then(data => {let first=data[0];this.setState({ data:first })})
    }

    render() {

        const { classes } = this.state.classes;

        return(
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                <div className={classes.details}>
                    <Typography variant="h5" className={classes[this.statusColor(this.state.data.status)]} gutterBottom>
                        {capitalize(this.state.data.status)}&nbsp;&nbsp;
                        <Button variant="contained" 
                                className={classes.button} 
                                color="primary"
                                onClick={createRun}>
                        Rerun
                        </Button>
                    </Typography>
                    <Grid container spacing={16}>
                        <Grid item md container>
                            <List>
                                <ListItem>Run # {this.state.data.id}</ListItem>
                                <ListItem>{this.state.data.successes}/{this.state.data.total_tests_run} Passing, {this.state.data.failures} Failure</ListItem>
                                <ListItem>2/10 In Variance, 8 Out of Variance</ListItem>
                            </List>    
                        </Grid>
                        <Grid item md container>
                            <List>
                                    <ListItem>Started: {moment(this.state.data.start).format('LLL')}</ListItem>
                                    <ListItem>Ended: {moment(this.state.data.end).format('LLL')}</ListItem>
                                    <ListItem>Duration: {this.duration(this.state.data.start, this.state.data.end)} hours</ListItem>
                            </List>
                        </Grid>
                        <Grid item md container>
                            <List>
                            <ListItem>Triggered by&nbsp;<a href="#">slackbot</a></ListItem>
                            <ListItem>Previous</ListItem>
                            <ListItem>Diff</ListItem>
                            </List>
                        </Grid>
                        <Grid item md container>
                            <List>
                                <ListItem><a href="#">Metrics</a>&nbsp;|&nbsp;Config</ListItem>
                                <ListItem><a href="#">Visual Artifacts</a></ListItem>
                                <ListItem><a href="#">Logs</a></ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </div>
                </CardContent>
            </Card>
        )
    }

    statusColor(status) {
        if(status === "success") {
            return "statusGreen"; } 
        else { return "statusRed"; }
    }
  
    duration(start, end) {
        let startMoment = moment(start);
        let endMoment = moment(end);
        let duration = moment.duration(endMoment.diff(startMoment));
        return duration.asHours();
    }
}

StatusCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusCard);
