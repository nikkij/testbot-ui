import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';

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
    button: {
        margin: theme.spacing.unit,
    }
});

const StatusCard = (props) => {
    const { classes } = props;
    return(
            <Card borderLeft={1} className={classes.card}>
        <CardContent className={classes.content}>
        <div className={classes.details}>
        <Typography variant="h5" className={classes.title} gutterBottom>
            Failed&nbsp;&nbsp;
            <Button variant="contained" className={classes.button} color="primary">
              Rerun
            </Button>
        </Typography>
            <Grid container spacing={16}>
          <Grid md container>
          <List>
            <ListItem>4/5 Passing, 1 Failure</ListItem>
            <ListItem>2/10 In Variance, 8 Out of Variance</ListItem>
            <ListItem><a href="">Metrics</a>&nbsp;|&nbsp;Config</ListItem>
          </List>    
          </Grid>
          <Grid md container>
          <List>
                  <ListItem>Started: Aug 2, 2018 at 06:44pm</ListItem>
                  <ListItem>Ended: Aug 2, 2018 at 6:02pm</ListItem>
                  <ListItem>Duration: 11:18:00</ListItem>
          </List>
            </Grid>
            <Grid md container>
            <List>
            <ListItem>Triggered by&nbsp;<a href="">slackbot</a></ListItem>
              <ListItem>Previous</ListItem>
              <ListItem>Diff</ListItem>
            </List>
            </Grid>
            <Grid md container>
            <List>
            <ListItem><a href="">Visual Artifacts</a></ListItem>
            <ListItem><a href="">Logs</a></ListItem>
            </List>
            </Grid>
          </Grid>
          </div>
          </CardContent>
        </Card>
    )
}

StatusCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusCard);
