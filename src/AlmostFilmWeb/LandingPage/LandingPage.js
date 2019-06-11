import React from 'react';
import Styles from './LandingPage.module.scss';
import PopularMovieDescription from './PopularMovieDescription/PopularMovieDescription.js'
import { request } from './request';




const urlPopular = 'movie/popular'
const urlMostPopular = 'https://api.themoviedb.org/3/search/movie?api_key=612ebf63e580831559365d1bc93af503&query=Avengers+Endgame'

const Description = (props) => { return(
    <div className={Styles.list}>
        <h3>{props.title}</h3>
    </div>
  )
}

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        return(
            <div className = {Styles.LandingPage}> 
          
            </div>
        )
    }
}

export default LandingPage