import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { cities } from '../../data/support'
import { Typography, Grid, Paper, Divider } from '@material-ui/core';
import TrainIcon from '@material-ui/icons/Train';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
    root : {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(8)
    },
    paper: {
        padding: '2em'
    },
    text: {
        marginTop: theme.spacing(6)
    },
    divider: {
        margin: '1em 0',
        height: '3px', 
        backgroundColor: 'purple'
    }
}))

// function getSteps(city) {
//     cities.map((city) => )
// }
export default function Arrival() {
    const [inputValue, setInputValue] = useState('');
    const classes = useStyle()

    return (<>
        <Autocomplete
        id="combo-box-demo"
        fullWidth
        disableClearable
        options={cities}
        getOptionLabel={(option) => option.name}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
        />

        <Grid container justifyContent="center" spacing={6}>
        {cities.filter(city => city.name === inputValue).map(city => (
            <>
            <Typography className={classes.text} align="center" variant="h4" color="secondary">
                To {city.name} Accommodation
            </Typography>
            <Grid item sm={12}>
                <Paper className={classes.paper}>
                    <TrainIcon fontSize="large" color="secondary" />
                    <Typography align="center" variant="h4" color="primary" gutterBottom>
                        By Train
                    </Typography>
                    <Divider className={classes.divider} style={{height: '2px', backgroundColor: 'purple'}} />
                    <Typography align="center" variant="subtitle1">
                        <MonetizationOnIcon fontSize="large" color="secondary"/>
                    </Typography>
                    <Typography align="center" variant="h5" gutterBottom>
                        {city.train.cost}
                    </Typography>
                    <Typography align="center" variant="subtitle1" gutterBottom>
                        <QueryBuilderIcon fontSize="large" color="secondary"/>
                    </Typography>
                    <Typography align="center" variant="h5" gutterBottom>
                        {city.train.time}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item sm={12}>
            <Paper className={classes.paper}>
                <AirportShuttleIcon fontSize="large" color="secondary" />
                <Typography align="center" variant="h4" color="primary" gutterBottom>
                        By Coach
                    </Typography>
                    <Divider className={classes.divider} style={{height: '2px', backgroundColor: 'purple'}} />
                    <Typography align="center" variant="subtitle1">
                    <MonetizationOnIcon fontSize="large" color="secondary"/>
                    </Typography>
                    <Typography align="center" variant="h5" gutterBottom>
                        {city.bus.cost}
                    </Typography>
                    <Typography align="center" variant="subtitle1">
                    <QueryBuilderIcon fontSize="large" color="secondary"/>
                    </Typography>
                    <Typography align="center" variant="h5" gutterBottom>
                        {city.bus.time}
                    </Typography>
            </Paper>
            </Grid>
            <Grid item sm={12}>
            <Paper className={classes.paper}>
                <LocalTaxiIcon fontSize="large" color="secondary" />
                <Typography align="center" variant="h4" color="primary" gutterBottom>
                        By Taxi
                    </Typography>
                    <Divider className={classes.divider} style={{height: '2px', backgroundColor: 'purple'}} />
                    <Typography align="center" variant="subtitle1">
                    <MonetizationOnIcon fontSize="large" color="secondary"/>
                    </Typography>
                    <Typography align="center" variant="h5" gutterBottom>
                        {city.taxi.cost}
                    </Typography>
                    <Typography align="center" variant="subtitle1">
                    <QueryBuilderIcon fontSize="large" color="secondary"/>
                    </Typography>
                    <Typography align="center" variant="h5" gutterBottom>
                        {city.taxi.time}
                    </Typography>
                </Paper>
            </Grid>
            </>
        ))}
        </Grid>
        </>
    );
}
