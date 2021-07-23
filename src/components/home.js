import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Typography, Paper, Divider, Grid } from '@material-ui/core/'
import { Timeline, TimelineItem, TimelineSeparator, TimelineOppositeContent, TimelineConnector, TimelineDot, TimelineContent} from '@material-ui/lab'
import { Repeat } from '@material-ui/icons/';
import EventIcon from '@material-ui/icons/Event';
import { Carousel } from 'react-bootstrap';

import cover7 from '../assets/cover7.jpg';
import coverPhoto from '../assets/coverPhoto.jpg';
import cover10 from '../assets/cover10.jpg';

import { timeline } from '../data/home.js';
import { newEvent } from '../data/newEvent.js';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    root: {
    },
    section:{
        marginTop: theme.spacing(4)
    },
    section2:{
        marginTop: theme.spacing(4),
        paddingTop: theme.spacing(2),
        color: 'white',
        backgroundColor: 'grey',
        display: 'none'
    },
    carousel: {
        backgroundColor: 'black',
    },
    carouselText: {
        marginBottom: theme.spacing(2),
        opacity: '100%',
    },
    carouselImg:{
        width: '100%',
        maxHeight: 600,
        objectFit: 'cover',
        opacity: '50%'
    },
    button:{
        border: '2px solid white',
        color: 'white'
    },
    paper: {
        padding: '1em 1em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px'
          },
      },
    divider: {
        color: 'pink',
        border: '3px solid pink'
    },
    eventImg: {
        maxWidth: 400,
        margin: 'auto'
    },
    link: {
        textDecoration: 'inherit',
        color: 'inherit',
        "&:hover": {
            color: 'grey'
        }
    },
}))

const Home = () => {

    const [show, setShow] = useState(false);
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <Carousel>
                <Carousel.Item className={classes.carousel} interval={5000}>
                    <img
                    className={classes.carouselImg}
                    src={coverPhoto}
                    alt="First slide"
                    />
                    <Carousel.Caption className={classes.carouselText}> 
                    <Typography variant="h3">Warwick Thai Society</Typography>
                    <p>We the best Thai Soc</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={classes.carousel} interval={5000}>
                    <img
                    className={classes.carouselImg}
                    src={cover7}
                    alt="Second slide"
                    />
                    <Carousel.Caption className={classes.carouselText}>
                    <Typography variant="h3">Activities</Typography>
                    <p>Our past activities, how does it looks, LIT AF!!!</p>
                    <Link className={classes.link} to="/events">
                        <Button className={classes.button} variant="outlined" size="large">View Events</Button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={classes.carousel} interval={5000}>
                    <img
                    className={classes.carouselImg}
                    src={cover10}
                    alt="Third slide"
                    />
                    <Carousel.Caption className={classes.carouselText}>
                    <Typography variant="h3">Support</Typography>
                    <p>Checklist-Arrival-QA</p>
                    <Link className={classes.link} to="/support">
                        <Button className={classes.button} variant="outlined" size="large">View Supports</Button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container className={classes.section} maxWidth="md">
                <Typography variant="h3" align="left" gutterBottom>
                    About Us
                </Typography> 
                <Divider />
                <Typography paragraph>
                Warwick Thai Society is a vibrant community of Thai students at the University of Warwick, Coventry, United Kingdom. T
                here are multiple activities and events organised by us every year. Like our facebook page or follow our instagram to get the most updated
                 events and keep in touch with your Thai friends. This official website is open for everyone! Please feel free to join us! Sawasdee ^/\^
                </Typography>
                <Typography paragraph>
                สวัสดีครับ พวกเราคือ Warwick Thai Society หรือก็คือสมาคมคนไทยของมหาวิ
                ทยาลัยWarwick ซึ่งตั้งอยู่ในเมือง Coventry, สหราชอาณา
                จักร ในระหว่างปีการศึกษา พวกเรานั้นจะมีการจัดกิจกรรมขึ้นเรื่อยๆเพื่อเป็นการ เชื่อมความสัมพันธ์ระหว่างคนไทยในมหาลัย และ ชาติอื่นๆด้วยเช่นกัน หวังว่าทุกคนจะเข้ามาร่วมกิจกรรมของเราเยอะๆนะครับ สวัสดีครับ/ค่ะ
                </Typography>
                <Link to="/about" className={classes.link}>
                    <Button variant="outlined" color="primary" size="large">View more about us</Button>
                </Link>
            </Container>
            <div className={classes.section2}>
            <Container maxWidth="md">

                <Typography align="center" variant="h3" gutterBottom>
                    Up Coming Event
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item >
                        <img className={classes.eventImg} src={newEvent.img} />
                    </Grid>
                    <Grid item sm={12}>
                    <Typography variant="h4">
                        {newEvent.name}
                    </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="subtitle2">
                            <EventIcon /> 27/8/2021 6PM
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography paragraph>
                            {newEvent.description}
                        </Typography>
                    </Grid>
                </Grid>

                </Container>
                </div>
            <Container className={classes.section} maxWidth="md">
                <Typography variant="h3" align="center" gutterBottom>
                    Calendar
                </Typography> 
                <Divider />
                <Timeline align="alternate">
                    {timeline.map((event) => (
                        <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography color="textSecondary">{event.time}</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary"/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper 
                            elevation={3} 
                            className={classes.paper} 
                            >
                                <Typography variant="h6" component="h1">
                                    {event.event}
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>{event.description}</Typography>
                            </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        ))}
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot color="primary">
                            <Repeat />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>End of the Year</Typography>
                    </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Container>
        </div>
    )
}

export default Home
