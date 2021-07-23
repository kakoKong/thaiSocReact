import { Container, Typography, Card, CardMedia, CardContent, Divider, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import coverAbout2 from '../assets/coverAbout2.jpg'
import tam from '../assets/execs/tam.jpeg'
import { exec } from '../data/about'

const useStyle = makeStyles((theme) => ({
    root : {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(8)
    },
    cardRoot:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    coverSection:{
        backgroundColor: 'black',
    },
    coverImg:{
        width: '100%',
        maxHeight: 600,
        objectFit: 'cover',
        opacity: '70%'
    },
    coverText:{
        position: 'absolute',
        color: 'white',
        top: '25%',
        left: '10%',
        fontWeight: 500,
    }, 
    cardImg:{
        objectFit: 'cover',
        width: '30%',
        height: 450,
        
    },
    memberImg:{
        width: 150,
        height: 150,
    },
    mainDetail:{
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5em',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
      },
    content: {
        flex: '1 0 auto',
    },
    divider: {
        height: '20px',
        backgroundColor: theme.palette.primary
    }
}))

const About = () => {
    const classes = useStyle()

    useEffect(() => {
        AOS.init({
            duration: 1000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true,
        })
    }, [])
    return (
        <div>
            <div className={classes.coverSection}>
                <img src={coverAbout2} className={classes.coverImg} alt="cover"/>
                <Typography data-aos="fade-right" className={classes.coverText} variant="h1">
                    About Us
                    <Typography variant="h4">
                        Warwick Thai Society
                    </Typography>
                </Typography>
            </div>
            <Container maxWidth="md" className={classes.root}>
                <Typography variant="h3" gutterBottom>
                    Who are we?
                </Typography>
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
            </Container>
            <Divider style={{height: '2px', color: 'purple'}} variant="middle" />
            <Container maxWidth="md" className={classes.root}>
                <Typography align="center" variant="h3" gutterBottom>
                    Our Executives
                </Typography>
                <Grid justifyContent="center" spacing={6} container>
                    <Grid item sm={12}>
                        <Card data-aos="fade" className={classes.cardRoot}>
                        <div className={classes.mainDetail}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h4">
                                    Tam
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Phudish Prateepamornkul
                                </Typography>
                                <Divider style={{height: '3px', color: 'purple'}} />
                                <Typography variant="h5" color="primary" gutterBottom>
                                    President
                                </Typography>
                                <Typography paragraph>
                                Hello kub everyone, my name is Tam and I will be the president of this year Thai Society na kub. 
                                This year might be different from other years due to the current situation of COVID-2019 , some activities might need to change according to the situation. However, 
                                I promise that I will try my best to make sure that this year will be a memorable year for everyone na kub. 
                                </Typography>
                                <Typography paragraph>
                                สวัสดีครับทุกคนผมชื่อแทมน่ะครับ และผมจะเป็น ประธาน สำหรับปีการศึกษานี้น่ะครับ ปีนี้อาจจะไม่ค่อยเหมือนปีก่อนๆ 
                                เพราะสถานการของ COVID-2019 อาจจะทำให้ บางกิจกรรมต้องมีการเปลี่ยนแปลง แต่ ผมสัญญาว่าผมจะทำเต็มที่และพยายามให้ปีนี้เป็นปีที่สนุกของคนไทย ทุกๆคน น่ะครับ
                                </Typography>
                                </CardContent>
                            </div>
                            <CardMedia
                                className={classes.cardImg}
                                component="img"
                                alt="Contemplative Reptile"
                                image={tam}
                                title="Contemplative Reptile"
                                />
                            </Card>
                    </Grid>
                    {exec.map((member) => (
                        <Grid item sm={6}>
                        <Card data-aos="fade-in" className={classes.cardRoot}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography variant="h5">
                                        {member.name}
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary">
                                    {member.fullName}
                                    </Typography>
                                    <Divider/>
                                    <Typography variant="subtitle1" color="primary" gutterBottom>
                                        {member.position}
                                    </Typography>
                                    </CardContent>
                            </div>
                            <CardMedia
                                className={classes.memberImg}
                                component="img"
                                alt="Contemplative Reptile"
                                image={member.img}
                                title="Contemplative Reptile"
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default About
