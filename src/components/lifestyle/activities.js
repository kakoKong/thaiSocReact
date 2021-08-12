import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { activities } from './data.js'
import { Divider, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 300,
    // margin: '0 4em'
  },
  media: {
    height: 200,
  },
  container: {
    display: 'flex'
  }
});

export default function Activities() {
  const classes = useStyles();

  return (
    <div>
        <Typography variant="h3" gutterBottom>Activities</Typography>
        <Grid container justifyContent="center" spacing={5}>
      {activities.map((activities) => (
          <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={activities.img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {activities.name}
              </Typography>

              <Typography gutterBottom variant="subtitle2" component="h2">
                <LocationOnIcon fontSize="small" color="primary"/>{activities.location}
              </Typography>
              
              <Divider/>
              <Typography align="center" gutterBottom variant="subtitle2">
                {activities.type}
              </Typography>
              
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  );
}