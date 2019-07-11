import React from 'react'
import Styles from './Login.module.scss';
import LoginInput from './LoginInputs/LoginInputs'

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
            console.log(data[0].password)
            if(data[0].password === this.passwordRef.current.refInput.current.value) {
                console.log("access allowed")
            }
            else {
                console.log("access denied")
            }
        })
        .catch(
            error => console.log("wrong nick")
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


