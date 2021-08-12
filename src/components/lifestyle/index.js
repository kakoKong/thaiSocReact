import { Container, Typography, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; 


import coverEvent from '../../assets/library.jpg'
import Restaurants from './restaurants';
import Activities from './activities';

const useStyle = makeStyles((theme) => ({
    root : {
        marginTop: theme.spacing(4),
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
        [theme.breakpoints.down('sm')]: {
            fontSize: '5rem'
          },
    }, 
    subCoverText:{
        [theme.breakpoints.down('sm')]: {
            display: 'none'
          },
    },
    carouselImg:{
        width: '100%',
        maxHeight: 500,
        objectFit: 'cover',
    },
}))
const LifeStyle = () => {
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
                <img src={coverEvent} className={classes.coverImg} alt="cover"/>
                <Typography data-aos="fade-up" align="right" className={classes.coverText} variant="h1">
                    Lifestyle
                    <Typography data-aos="fade-up" className={classes.subCoverText} variant="h4">
                        Activities - Restaurants
                    </Typography>
                </Typography>
            </div>
            <div className={classes.root}>
            <Container maxWidth="md" className={classes.container}>
                <Activities />
            </Container>
            </div>
            <div className={classes.root}>
            <Container maxWidth="md" className={classes.container}>

                <Restaurants/>
                
            </Container>
            </div>
        </div>
    )
}

export default LifeStyle
