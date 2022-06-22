import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/navBar';

import Home from './components/home';
import About from './components/aboutUs'

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import Footer from './components/footer';
import Popup from './components/popup';
import Support from './components/support/support';
import MobileMenu from './components/mobileNavbar';
import ScrollToTop from './toTheTop';
import Events from './components/events';
import LifeStyle from './components/lifestyle';



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
          <Route path="/lifestyle" component={LifeStyle}></Route>
          <Route path="/events" component={Events}></Route>
        </Switch>
        <Footer />
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
      </ThemeProvider>
    </Router>
  );
}

export default App;
