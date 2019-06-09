import React from 'react';
import Styles from './LandingPage.module.scss'
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


const urlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=612ebf63e580831559365d1bc93af503'

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
            popularMovies: [],
        }
    }

    componentDidMount() {
        fetch(urlPopular)
        .then(response => response.json())
        .then(data => this.setState({popularMovies: data.results}))
    }

    render() {
        return(
            <div className = {Styles.LandingPage}>
                
                <div className = {Styles.popular}>
                    <h2>Popularne: </h2>
                    {
                        this.state.popularMovies.map((item) => (
                            <Description title = {item.title} /> 
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default LandingPage