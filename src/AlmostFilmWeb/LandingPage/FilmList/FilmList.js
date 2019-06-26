import React from 'react';
import { request } from '../request'

class FilmList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        request('movie/upcoming')
        .then(data => this.setState({movies: data}))
    }

    render() {
        return(
            <div>
                
            </div>
        )
    }
}

export default FilmList;