import React from 'react';
import { request } from '../request'
import Styles from './FilmList.module.scss';
import { Link } from 'react-router-dom';


const PartList = (props) => {
    return(
        <Link to = {`/movies/${props.id}`} className = { Styles.Item } style = {{backgroundImage: `url(https://image.tmdb.org/t/p/original${props.poster_path})`}} />
    )
}

class FilmList extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            whichPart: 1,
        }
    }

    componentDidMount() {
        request('movie/upcoming')
        .then(data => this.setState({movies: data.results}))
    }

    clickRight = () => {
        this.setState({whichPart: this.state.whichPart + 1})
    }

    clickLeft = () => {
        if(this.state.whichPart > 1) {
            this.setState({whichPart: this.state.whichPart - 1})
        }
    }

    render() {

        console.log(this.state.movies);

        return(
            <div className = {Styles.Container}>
                {
                    this.state.movies.splice(0,10).map((item) => (
                        <PartList title = {item.title} poster_path = {item.poster_path} id = {item.id}/>
                    ))
                }
            </div>
        )
    }

    // for(int i = this.state.counter; i < counter*liczba; i++) ale wcześniej trzeba zrobić metode która wyznacza subArray
}

export default FilmList;