import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

import coverAbout from '../../assets/coverAbout.jpg'
import Arrival from './arrival'

const useStyle = makeStyles((theme) => ({
    root : {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(8)
    },
    root2:{
        backgroundColor: '#9B72AA',
        color: 'white'
    },
    container:{
        paddingTop: theme.spacing(4),
        marginBottom: theme.spacing(8),
    },
    coverImg:{
        width: '100%',
        maxHeight: 600,
        objectFit: 'cover',
        opacity: '70%'
    },
    coverSection:{
        backgroundColor: 'black',
    },
    coverText:{
        position: 'absolute',
        color: 'white',
        top: '25%',
        right: '10%',
        fontWeight: 500,
    }, 
}))
const Support = () => {
    const classes = useStyle()
    return (
        <div>
             <div className={classes.coverSection}>
                <img src={coverAbout} className={classes.coverImg} alt="cover"/>
                <Typography align="right" className={classes.coverText} variant="h1">
                    Support
                    <Typography variant="h4">
                        Preparation, Arrival, Accommodation
                    </Typography>
                </Typography>
            </div>
            <Container maxWidth="md" className={classes.root}>
                <Typography variant="h3">
                    Before Departure
                </Typography>
                <Typography variant="subtitle1">
                    Ask Your Agency
                </Typography>
            </Container>
            <div className={classes.root}>
            <Container maxWidth="md" className={classes.container}>
                <Typography variant="h3" gutterBottom>
                    Arrival
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Select Your Accommodation's Location
                </Typography>
                <Arrival />
            </Container>
            </div>
            <Container maxWidth="md" className={classes.root}>
                <Typography variant="h3">
                    Accommodation
                </Typography>
                <Typography variant="subtitle1">
                    Your Accom
                </Typography>
            </Container>
        </div>
    )
}

export default Support
