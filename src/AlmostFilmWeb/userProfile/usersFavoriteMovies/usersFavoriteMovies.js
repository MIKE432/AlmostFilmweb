import React from 'react'
import { Description } from '../../Description/Description'

class UsersMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: this.props.movies
        }
    }

    render() {
        return(
            <div>
                {
                    this.state.movies.map((item) => {
                        <Description
                        onclick = {this.handleClick}
                            popularity={item.popularity}
                            title={item.title}
                            vote_average={item.vote_average}
                            poster_path = {item.poster_path}
                            id = {item.id}
                        />
                    })
                }
            </div>
        )
    }


}