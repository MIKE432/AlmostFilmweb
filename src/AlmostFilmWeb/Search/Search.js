import React from 'react';
import Styles from './Search.module.scss'
import { request } from '../LandingPage/request.js'
import { Description } from '../Description/Description.js'


const Details = (props) => {

    if(props.movie === undefined)
        return null;

    return(
        <div>
            <h1>{props.movie.title}</h1>
            <div>
               
                <h1>{props.movie.poster_path}</h1>
                <h1>{props.movie.release_date}</h1>
                <h6>{props.movie.overviewas}</h6>
            </div>
        </div>
    )
}

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            popular: [],
            movie: {},
            isLoading: false,
        }
    }

    onChangeName = (change) => {
        console.log(change.target.value)
        this.setState({isLoading: true})
        request('search/movie', `query=${change.target.value}$`)
        .then(data => this.setState({popular: data.results, isLoading: false, movie: data.results[0]}))
    }

   

    render() {
        return(
            <div className = {Styles.SearchComponent} >

                <Details movie = {this.state.movie} className = {Styles.Details} />
                
                <div className = {Styles.searchAndResults}>
                    <input onChange = {this.onChangeName} className = {Styles.Input} /> 
                    {
                        this.state.popular.map((item) => (
                        <Description 
                            onClick = {this.handleClick}
                            popularity={item.popularity}
                            title={item.title}
                            vote_average={item.vote_average}
                            poster_path = {item.poster_path}
                            id = {item.id}
                        />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Search