import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import CloseIcon from '@material-ui/icons/Close';

import React from 'react'

import tam from '../assets/popup.jpg'

const useStyle = makeStyles((theme) => ({
    popUp: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    popItem: {
        position: 'relative',
        padding: '40px',
        maxWidth: '500px',
        backgroundColor: 'inherit',
    },
    img: {
        height: 'auto',
        width: '100%'
    },
    button: {
        position: 'absolute',
        top: 0,
        right: 0,
        color: 'white'
    }
}))

const Popup = (props) => {
    const classes = useStyle()
    return (props.trigger) ? (
        <div className={classes.popUp} onClick={() => props.setTrigger(false)}>
            
            <div className={classes.popItem}>

                <IconButton className={classes.button} ><CloseIcon /></IconButton>
                <img src={tam} className={classes.img} alt="" />
            </div>
        </div>
    ) : ""
}

export default Popup
