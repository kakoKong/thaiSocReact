import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar:{
        backgroundColor: 'transparent',
        color: 'white',
        boxShadow: 'none',
    },
    appBarActive:{
        backgroundColor: 'white',
        color: 'black',
        animation: `$myEffect 500ms`
    },
    "@keyframes myEffect": {
        "0%": {
          opacity: 0.3,
        },
        "100%": {
          opacity: 1,
        }
      },
    menuButton: {
        marginRight: theme.spacing(2),
        borderRadius: 0,
        "&:hover": {
            backgroundColor: 'inherit'
            }
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    logo: {  
        width: '50px',
        height: '50px',
        borderRadius: 50
    },
    navItem:{
        marginRight: '2em',
        display: 'flex',
        flexWrap: 'noWrap',
        justifyContent: 'center',
        textAlign: 'center',
        
    },
    item:{
        fontSize: 20,
        "&:hover": {
            backgroundColor: 'inherit'
            }
    },
    link: {
        textDecoration: 'inherit',
        color: 'inherit',
        "&:hover": {
            color: 'grey'
        }
    },
    hover: {
        
    }
}));

export default function NavBar() {
  const classes = useStyles();
  const [navBG, setNavBG] = useState('appBar')

  const navRef = useRef()
  navRef.current = navBG

  useEffect(() => {
      const handleScroll = () => {
          const show = window.scrollY > 110
          if (show) {
              setNavBG('appBarActive')
          }
          else {
              setNavBG('appBar')
          }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
          document.removeEventListener('scroll', handleScroll)
      }
  }, [])

  return (
    <div className={classes.root}>
      <AppBar className={classes[navRef.current]} position="fixed" style={{ margin: 0 }}>
        <Toolbar>
            <Link to="/" className={classes.link}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <img className={classes.logo} src={logo} alt="Logo"></img>
                    <Typography variant="h6" className={classes.title}>
                        Warwick Thai Society
                    </Typography>   
                </IconButton>
            </Link>
          <div className={classes.navItem}>
            <MenuItem className={classes.item}>
                <Link to="/" className={classes.link}>
                    Home
                </Link>
            </MenuItem>
            <MenuItem className={classes.item}>
                <Link to="/about" className={classes.link}>
                    About
                </Link>
            </MenuItem>
            <MenuItem className={classes.item}>
                <Link to="/support" className={classes.link}>
                    Support
                </Link>
            </MenuItem>
            <MenuItem className={classes.item}>
                <Link className={classes.link}>
                    Life
                </Link>
            </MenuItem>
            <MenuItem className={classes.item}>
                <Link className={classes.link}>
                    Events
                </Link>
            </MenuItem>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}