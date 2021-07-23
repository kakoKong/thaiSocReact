import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Typography, Paper, Divider } from '@material-ui/core/'
import { Timeline, TimelineItem, TimelineSeparator, TimelineOppositeContent, TimelineConnector, TimelineDot, TimelineContent} from '@material-ui/lab'
import { Repeat } from '@material-ui/icons/';
import { Carousel } from 'react-bootstrap';

import cover7 from '../assets/cover7.jpg'
import coverPhoto from '../assets/coverPhoto.jpg'
import cover10 from '../assets/cover10.jpg'

import { timeline } from '../data/home.js'


const useStyle = makeStyles((theme) => ({
    root: {
    },
    section:{
        marginTop: theme.spacing(4)
    },
    carousel: {
        backgroundColor: 'black',
    },
    carouselText: {
        marginBottom: theme.spacing(2),
        opacity: '100%'
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
        padding: '1em 2em',
      },
    divider: {
        color: 'pink',
        border: '3px solid pink'
    }
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
                    <p>We bond, we drink, we dead</p>
                    <Button className={classes.button} variant="outlined" size="large">View more</Button>
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
                    <Button className={classes.button} variant="outlined" size="large">View more</Button>
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
                    <p>Which flight should you take? How do you transport to your accommodation? Where to buy stuff?</p>
                    <Button className={classes.button} variant="outlined" size="large">Find more here</Button>
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
                <Button variant="outlined" color="primary" size="large">View more about us</Button>
            </Container>    
            <Container className={classes.section} maxWidth="md">
                <Typography variant="h3" align="center" gutterBottom>
                    Our Events
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
