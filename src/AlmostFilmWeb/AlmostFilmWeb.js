import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Filmweb from './App.js';
import LandingPage from './LandingPage/LandingPage'
import NavBar from './NavBar/NavBar.js';
import Footer from './Footer/Footer.js'
import Search from './Search/Search.js'
import Details from './MovieDetails/MovieDetails.js'
import Register from '../AlmostFilmWeb/Register/Register.js'
import { WrongRoute } from '../AlmostFilmWeb/404Component/404Component'

const AlmostFilmWeb = (props) =>
<div>
  <Router>
    <NavBar />
      <Switch>
        <Route exact path = "/Nowosci" component = {Filmweb} />
        <Route exact path ="/" component={LandingPage} />
        <Route exact path = "/Search" component = {Search} />
        <Route path = "/movies/:id" component = {Details} />
        <Route exact path = "/Register" component = {Register} />
        <Route exact path = "/user" component = {Search} />
        <Route path='*' exact={true} component={WrongRoute} />

      </Switch>
      <Footer />
  </Router>
 
</div>

export default AlmostFilmWeb;
