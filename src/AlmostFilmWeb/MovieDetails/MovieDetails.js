import React from 'react'


class Details extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: props.title,
            vote: props.vote_average,
            popularity: props.popularity,
            poster_path: poster_path,
        }
    }

    

    
}

export default Details