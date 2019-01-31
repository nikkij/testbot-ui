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
import red from '@material-ui/core/colors/red';

const styles = {
    card: {
        display: 'flex',
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
    }
};

const StatusCard = (props) => {
    const { classes } = props;
    return(
            <Card className={classes.card}>
            <CardContent>
              <div className={classes.details}>
                <Typography variant="h6" className={classes.title} gutterBottom>
                  Failed
                </Typography>
                <List>
                  <ListItem>Started: Aug 2, 2018 at 06:44pm</ListItem>
                  <ListItem>Ended: Aug 2, 2018 at 6:02pm</ListItem>
                  <ListItem>Duration: 11:18:00</ListItem>
                </List>
              </div>
            </CardContent>
        </Card>
    )
}

StatusCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusCard);
