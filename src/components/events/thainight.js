import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { Carousel } from 'react-bootstrap';
import { thaiNight } from '../../data/events/thainight';
import { Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    carouselImg:{
        width: '100%',
        maxHeight: 500,
        objectFit: 'cover',
        [theme.breakpoints.down('sm')]: {
            height: 300,
          },
    },
}))

const ThaiNight = () => {
    const classes = useStyle()
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                    Thai Night
                </Typography>
                <Typography paragraph>
                Our Thai Night is an annual event that takes place at the end of Term 2. 
                This event is where we have performances from our members such as dancing, live music and games.
                Therefore,this event is considered to be the highlight of our Thai Society.
                </Typography>
                <Typography paragraph>
                Thai Night ถือว่าเป็นกิจกรรม highlight ของ Thai Society ซึ่งเป็นกิจกรรมที่จัดขึ้นช่วงเดือนมีนาคม หรือปลายๆเทอม2 งานนี้จะเป็นงานที่
                สนุกที่สุดโดยจะมีโชว์ต่างๆ การเต้น เล่นเกม ดนตรีสด และ ดีเจ ซึ่งทำให้งานนี้เป็นงานที่ลงตัวและสนุกที่สุดของปี
                </Typography>
            <Carousel>
                {thaiNight.map(pic => (
                    <Carousel.Item className={classes.carousel} interval={5000}>
                        <img
                        className={classes.carouselImg}
                        src={pic.img}
                        alt="First slide"
                        />
                        <Carousel.Caption className={classes.carouselText}> 
                        <Typography variant="h5">{pic.name}</Typography>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
                </Carousel>
        </div>
    )
}

export default ThaiNight
