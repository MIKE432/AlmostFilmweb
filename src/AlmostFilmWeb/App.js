import React from 'react';
import Styles from './globals.module.scss';
import NavBar from './NavBar/NavBar';
import { Description } from '../AlmostFilmWeb/Description/Description.js';

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=612ebf63e580831559365d1bc93af503'

class Filmweb extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      Library: []
    }
  }

  componentDidMount() {
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({Library: data.results}))
  }

  handleClick() {
    console.log("Clicked")
  }
  

  render() {
    return (
      <div className = {Styles.all}>
          {
            this.state.Library.map((item) => (
              <Description onClick = {this.handleClick}
                popularity={item.popularity}
                title={item.title} 
                vote_average={item.vote_average}
                poster_path = {item.poster_path}
                id = {item.id}
                />
                
            ))
            
          }
      </div>
    )

  }

}

export default Filmweb;
