import React from 'react'
import Styles from './Login.module.scss';


export default class Login extends React.Component {
    state = {
        name: '',
        surname: '',

    }

    render() {
        return(
            <div className = {Styles.Container}>
                <input placeholder = "Nick" />
                <input type = "password" placeholder = "hasło" minlength="6" />
                <button>Zaloguj</button>
            </div>
        )
    }

}


