import React from 'react';
import Styles from './Search.module.scss'
import { request } from '../LandingPage/request.js'
import { Description } from '../Description/Description.js'



class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            popular: [],
            isLoading: false,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    onChangeName = (change) => {
        this.setState({isLoading: true})
        request('search/movie',`query=${change.target.value}$`)
        .then(data => this.setState({popular: data.results, isLoading: false}))
    }

    render() {
        return(
            <div className = {Styles.SearchComponent} >
                <input onChange = {this.onChangeName} className = {Styles.Input} />
                {
                    this.state.popular.map((item) => (
                    <Description
                        onClick = {this.handleClick}
                        popularity={item.popularity}
                        title={item.title}
                        vote_average={item.vote_average}
                        poster_path = {item.poster_path}
                    />
                    ))
                }
            </div>
        )
    }
}

export default Search
//debounce