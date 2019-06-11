import React from 'react'
import Styles from './MovieDetails.module.scss'


class Details extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        const { match } = this.props;

        fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=612ebf63e580831559365d1bc93af503`)
        .then(response => response.json())
        .then(data => this.setState({movie: data}))
    }

    render() {
        const { movie } = this.state;

        return (
            <div>
                <div className = {Styles.Details} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`}}>
                    <div className = {Styles.container}>
                        <h1 className = {Styles.title}>{movie.title}</h1>
                        <h1 className = {Styles.title}>Vote: {movie.vote_average}</h1>
                    </div>
                </div>
                
                <p>{movie.overview}</p>
            </div>
        )
    }



    

    
}

export default Details