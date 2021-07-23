import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { Carousel } from 'react-bootstrap';
import { firstMeet } from '../../data/events/firstmeet';
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

const FirstMeet = () => {
    const classes = useStyle()
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                    Thai Soc First Meet
                </Typography>
                <Typography paragraph>
                The first official meeting of Warwick Thai Society, held at the University. 
            There will be a brief explanation of the upcoming event throughout the year. 
            Subsequently, we will play an ice-breaker game to improve relationships and bond everyone.
                </Typography>
                <Typography paragraph>
                First Meet เป็นกิจกรรมแรกที่ถูกจัดที่มหาลัย ซึ่งจะเป็นการพูดถึงกิจกรรมที่เราจะทำในอนาคต แนะนำการใช้ชีวิตที่นี่ เช่น
            ร้านอาหารที่แนะนำ หรือ กิจกรรมที่สามารถทำได้แถวมหาลัย
            และสุดท้ายเล่นเกมและอาจจะมีไปคาราโอเกะต่อเพื่อให้ทุกคนรู้จักกันมากขึ้น
                </Typography>
            <Carousel>
                {firstMeet.map(pic => (
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

export default FirstMeet