import React from 'react';
import Styles from './Search.module.scss'
import { request } from '../LandingPage/request.js'
import { Link } from 'react-router-dom'
import { Description } from '../Description/Description'

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            popular: [],
            movie: {},
            isLoading: false,
            id: null,
        }
    }

    onChangeName = (change) => {

        this.setState({isLoading: true})
        request('search/movie', `query=${change.target.value}$`)
        .then(data => this.setState({popular: data.results, isLoading: false, movie: data.results[0]}))
    }

    render() {
        return(
            <div className = {Styles.SearchComponent} >
                
                <div className = {Styles.searchAndResults}>
                    <input onChange = {this.onChangeName} className = {Styles.Input} placeholder = 'Type title'/> 
                    {
                        this.state.popular.map((item) => (
                        <Description
                            onclick = {this.handleClick}
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