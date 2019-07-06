import React from 'react';
import Styles from './Register.module.scss';
import LoginInput from '../Login/LoginInputs/LoginInputs'



class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div className = {Styles.Container}>
                <div className = {Styles.Inputs}>
                    <h1>Almost FilmWeb</h1>
                    <LoginInput label = "e-mail" name = "Nick" type = 'text'/>
                    <LoginInput label = "Nick" name = "Nick" type = 'text'/>
                    <LoginInput label = "Password" type = 'password' />
                    <button>Zarejestruj</button>
                </div>
            </div>
        )
    }
}

export default Register