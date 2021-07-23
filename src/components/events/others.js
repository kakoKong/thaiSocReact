import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { Carousel } from 'react-bootstrap';
import { others } from '../../data/events/others';
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

const Others = () => {
    const classes = useStyle()
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                    Other Activities
                </Typography>
                <Typography paragraph>
                Throughout the year, the Thai Society also hosts different 
          activities such as Temple visits, where we will be going to Thai Buddhist 
          Temple nearby and make merits. Moreover, our Thai Society Dinner is also another
           memorable moment
           where we all have dinner together and play some team building activities.
                </Typography>
                <Typography paragraph>
                ในตลอดปี Thai Society ก็ยังมีจัดงานเล็กๆน้อยๆขึ้นเรื่อยๆ เช่น Temple Visit ซึ่งเป็นกิจกรรมที่เราจะไปทำบุญกันที่วัดไทยใกล้ๆเมือง Warwick
            และทานอาหารร่วมกัน อีกหนึ่งกิจกรรมก็คือ Thai Soc Dinner ซึ่งเป็นกิจกรรมทานข้าวด้วยกันที่ร้านอาหารในมหาลัย และมีการเล่นเกมแบ่งกลุ่มกันทำกิจกรรม
            อย่างเมื่อปีก่อนๆจะมีเกมให้ทำการแสดงสั้นๆ โดยทีมชนะจะได้รางวัลไป ถือเป็นอีกหนึ่งกิจกรรมที่อบอุ่นมากสำหรับ Thai Society
                </Typography>
            <Carousel>
                {others.map(pic => (
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

export default Others