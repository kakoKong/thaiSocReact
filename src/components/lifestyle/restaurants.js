import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { restaurants } from './data.js'
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
  },
  description: {
    marginTop: 8
  }
});

export default function Restaurants() {
  const classes = useStyles();

  return (
    <div>
        <Typography variant="h3" gutterBottom>Restaurants</Typography>
        <Grid container justifyContent="center" spacing={5}>
      {restaurants.map((restaurant) => (
          <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={restaurant.img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {restaurant.name}
              </Typography>

              <Typography gutterBottom variant="subtitle2" component="h2">
                <LocationOnIcon fontSize="small" color="primary"/>{restaurant.location}
              </Typography>
              
              <Divider gutterBottom/>
              <Typography className={classes.description} align="center" gutterBottom variant="subtitle2" color="textSecondary">
                {restaurant.type}
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