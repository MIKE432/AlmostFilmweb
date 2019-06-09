import React from 'react';
import Styles from './LandingPage.module.scss'
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


const urlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=612ebf63e580831559365d1bc93af503'
const urlTopRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=612ebf63e580831559365d1bc93af503'
const urlUpComing = 'https://api.themoviedb.org/3/movie/upcoming?api_key=612ebf63e580831559365d1bc93af503'

const Description = (props) => { return(
    <div className={Styles.list}>
      <h1>{props.title}</h1> 
    </div>
  )
}


class LandingPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            popularMovies: [],
            topRatedMovies: [],
            upComingMovies: [],
        }
    }

    componentDidMount() {
        fetch(urlPopular)
        .then(response => response.json())
        .then(data => this.setState({popularMovies: data.results}))

        fetch(urlTopRated)
        .then(response => response.json())
        .then(data => this.setState({topRatedMovies: data.results}))

        fetch(urlUpComing)
        .then(response => response.json())
        .then(data => this.setState({upComingMovies: data.results}))
      }

    render() {
        return(
            <div>
                <h2>Popularne: </h2>
                <div className = {Styles.popular}>
                    {
                        this.state.popularMovies.map((item) => (
                            <Description title={item.title} vote_average={item.vote_average} /> 
                        ))
                    }
                </div>

                <h2>Najlepiej Oceniane: </h2>
                <div className = {Styles.popular}>
                    {
                        this.state.topRatedMovies.map((item) => (
                            <Description title={item.title} vote_average={item.vote_average} /> 
                        ))
                    }
                </div>

                <h2>Nadchodzą: </h2>
                <div className = {Styles.popular}>
                    {
                        this.state.upComingMovies.map((item) => (
                            <Description title={item.title} vote_average={item.vote_average} /> 
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default LandingPage
