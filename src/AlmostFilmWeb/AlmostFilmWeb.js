import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Filmweb from './App.js';
import LandingPage from './LandingPage/LandingPage'
import NavBar from './NavBar/NavBar.js';
import Footer from './Footer/Footer.js'
import Search from './Search/Search.js'
import Details from './MovieDetails/MovieDetails.js'

const AlmostFilmWeb = (props) =>
<div>
  <Router>
    <NavBar />
      <Switch>
        <Route exact path = "/Nowosci" component = {Filmweb} />
        <Route exact path ="/" component={LandingPage} />
        <Route exact path = "/Search" component = {Search} />
        <Route path = "/movies/:id" component = {Details} />
      </Switch>
  </Router>
  <Footer />
</div>

export default AlmostFilmWeb;
