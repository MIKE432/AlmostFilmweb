import React from 'react'
import Styles from './Login.module.scss';
import LoginInput from './LoginInputs/LoginInputs'

export default class Login extends React.Component {
    state = {
        name: '',
        surname: '',
    }

    render() {
        return(
            <div className = {Styles.Container}>
                <div className = {Styles.Inputs}>
                    <h1>Zaloguj</h1>
                    <LoginInput label = "Nick" name = "Nick" type = 'trxt'/>
                    <LoginInput label = "Password" type = 'password' />
                    <button>Zaloguj</button>
                </div>
            </div>
        )
    }

}


