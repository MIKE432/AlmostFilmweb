import React from 'react'
import Styles from './MovieDetails.module.scss'
import { LoadingComponent } from '../../Assets/LoadingComponent/LoadingComponent'

class Details extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            movie: {},
            isLoading: false,
        }
    }

    componentDidMount() {
        const { match } = this.props;

        this.setState({isLoading: true})

        fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=612ebf63e580831559365d1bc93af503`)
        .then(response => response.json())
        .then(data => this.setState({movie: data, isLoading: false}))
    }

    render() {
        const { movie, isLoading } = this.state;

        if(isLoading) {
            return(
                <LoadingComponent />
            )
        }
            

        return (
            <div className = {Styles.AllDetails}>
                <div className = {Styles.Details}>
                    <div className = {Styles.Poster} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`}}>
                        <div className = {Styles.container}>
                            <h1 className = {Styles.title}>{movie.title}</h1>
                            <h1 className = {Styles.title}>Vote: {movie.vote_average}</h1>
                        </div>
                    </div>
                </div>
                <p>{movie.overview}</p>
            </div>
        )
    }



    

    
}

export default Details