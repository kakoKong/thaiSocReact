import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/navBar';

import Home from './components/home';
import About from './components/aboutUs'

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles'

import Footer from './components/footer';
import Popup from './components/popup';
import Support from './components/support/support';
import MobileMenu from './components/mobileNavbar';
import ScrollToTop from './toTheTop';



const theme = createTheme({
  palette: {
    primary: {
      main: '#9B72AA',
    },
    secondary: {
      main: '#3C5186',
    },
    background: {
      default: "#F8F8FB"
    }
  }
});


function App() {

  const [buttonPopup, setButtonPopup] = useState(true)
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <NavBar />
        <MobileMenu />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/support" component={Support}></Route>
        </Switch>
        <Footer />
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
      </ThemeProvider>
    </Router>
  );
}

export default App;
