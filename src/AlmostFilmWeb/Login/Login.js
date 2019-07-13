import React from 'react'
import Styles from './Login.module.scss'
import LoginInput from './LoginInputs/LoginInputs'
import { store } from '../../index'
import { userLogIn } from '../statemanage/actions/loginActions'

export default class Login extends React.Component {

    constructor() {
        super();
        this.nameRef = React.createRef();
        this.passwordRef = React.createRef();
        
    }

    handleClick = (e) => {
        e.preventDefault();

        fetch(`http://localhost:9000/users/name=${this.nameRef.current.refInput.current.value}`)
        .then(data => data.json())
        .then(data => {
                
            if(data[0].password === this.passwordRef.current.refInput.current.value) {
                store.dispatch(userLogIn(data[0]))
            }
            else { this.passwordRef.current.onError() }
        })
        .catch(
            error => { this.nameRef.current.onError() } 
        )
    }



    render() {
        return(
            <div className = {Styles.Container}>
                <div className = {Styles.Inputs}>
                    <h1>Zaloguj</h1>
                    <LoginInput ref = {this.nameRef} label = "Nick" name = "Nick" type = 'trxt'/>
                    <LoginInput ref = {this.passwordRef} label = "Password" type = 'password' />
                    <button onClick = {this.handleClick}>Zaloguj</button>
                </div>
            </div>
        )
    }

}


