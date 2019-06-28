import React from 'react';
import Styles from './Register.module.scss';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div className = {Styles.Container}>
                <div className = {Styles.Inputs} >
                    <input></input>
                    <input></input>
                    <input></input>
                    <input type = "password"></input>
                </div>
            </div>
        )
    }
}

export default Register