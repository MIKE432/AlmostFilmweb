import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Filmweb from './App.js';
import LandingPage from './LandingPage/LandingPage'
import NavBar from './NavBar/NavBar.js';

const AlmostFilmWeb = (props) =>
<div>
  
  <Router>
    <NavBar />
      <Switch>
        <Route exact path = "/Nowosci" component = {Filmweb} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
  </Router>

</div>

export default AlmostFilmWeb;
