import React from 'react'

const Description = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src = {props.src}></img>
        </div>
    )
}

class PopularDescription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title:  props.title,
            picture_path: props.picture_path,
            description: props.description,
            realiseDate: props.realiseDate,
        }
    }

    render() {
        return(
            <Description title = {this.state.title} description = {this.state.description} 
                                src = {this.state.picture_path}
                                realiseDate = {this.state.realiseDate} />
        )
    }
}


export default PopularDescription