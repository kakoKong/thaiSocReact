import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Typography, Grid, IconButton } from '@material-ui/core/'
import { Mail, Instagram, Facebook, Face } from '@material-ui/icons/';

const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: 'black',
        color: 'white',
    },
    container: {
        paddingTop: theme.spacing(4)
    }
}))
const Footer = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Container className={classes.container} maxWidth="md">
                <Typography align="center" variant="h5" gutterBottom>
                    <mail>WarwickThaiSociety@gmail.com</mail>
                </Typography>
                <Grid justifyContent="center" spacing={5} container>
                    <Grid item>
                        <Typography align="center">
                            <IconButton color="inherit" href="https://www.instagram.com/warwickthaisoc/" >
                                
                                <Instagram fontSize="large" />
                            </IconButton>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align="center">
                            <IconButton color="inherit" href="https://www.facebook.com/WarwickThaiSoc" >
                                <Facebook fontSize="large" />
                            </IconButton>
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="subtitle2" align="center" >©2020 by Warwick Thai Society. All rights reserved.</Typography>
                        <Typography variant="subtitle2" align="center" >Developed by Kaokong</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer
