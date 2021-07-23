import { Container, Typography, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import coverAbout from '../../assets/coverAbout.jpg'
import Arrival from './arrival'
import CheckList from './checkList'
import QA from './qa'

const useStyle = makeStyles((theme) => ({
    root : {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
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
    subCoverText:{
        [theme.breakpoints.down('sm')]: {
            display: 'none'
          },
    }
}))
const Support = () => {
    const classes = useStyle()

    useEffect(() => {
        AOS.init({
            duration: 2000, // values from 0 to 3000, with step 50ms
            once: true,
        })
    },[])

    return (
        <div>
             <div className={classes.coverSection}>
                <img src={coverAbout} className={classes.coverImg} alt="cover"/>
                <Typography data-aos="fade-up" align="right" className={classes.coverText} variant="h1">
                    Support
                    <Typography data-aos="fade-up" className={classes.subCoverText} variant="h4">
                        Preparation, Arrival, Accommodation
                    </Typography>
                </Typography>
            </div>
            <Container maxWidth="md" className={classes.root}>
                <Typography variant="h3" gutterBottom>
                    Before Departure
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Paper style={{padding: '1em'}}>
                         <CheckList />
                        </Paper>
                    </Grid>
                </Grid>
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
                <Typography variant="h3" gutterBottom>
                    Frequently Asked Questions
                </Typography>
                <QA />
            </Container>
        </div>
    )
}

export default Support
