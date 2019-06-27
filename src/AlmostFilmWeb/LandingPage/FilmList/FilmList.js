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
            sections: 1,
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

    checkWhichSection = (number) => {
        if(this.state.sections === number)
            return "rgb(231, 231, 231)";
    }

    handleClick = (number) => {

        if(this.state.sections === number)
            return;
        else {
            
            if(number === 1) {
                this.setState({sections: number});
                request('movie/upcoming')
                .then(data => this.setState({movies: data.results}))
            }
            else if(number === 2) {
                this.setState({sections: number});
                request('movie/now_playing')
                .then(data => this.setState({movies: data.results}))
            }
            else if(number === 3) {
                this.setState({sections: number});
                request('movie/top_rated')
                .then(data => this.setState({movies: data.results}))
            }
            
        }
    }

    render() {
        console.log(this.state.sections);

        return(
            <div className = {Styles.Container}>
                <div className = {Styles.Choices}>
                    <h1 style = {{color: this.checkWhichSection(1)}} onClick = {() => this.handleClick(1)}>Nadchodzące</h1>
                    <h1 style = {{color: this.checkWhichSection(2)}} onClick = {() => this.handleClick(2)}>Najnowsze</h1>
                    <h1 style = {{color: this.checkWhichSection(3)}} onClick = {() => this.handleClick(3)}>Najlepiej oceniane</h1>
                </div>
            
                <div className = {Styles.Items}>
                {
                    this.state.movies.splice(0,10).map((item) => (
                        <PartList title = {item.title} poster_path = {item.poster_path} id = {item.id}/>
                    ))
                }
                </div>
            </div>
        )
    }

    // for(int i = this.state.counter; i < counter*liczba; i++) ale wcześniej trzeba zrobić metode która wyznacza subArray
}

export default FilmList;