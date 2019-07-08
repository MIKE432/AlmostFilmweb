import React from 'react';
import Styles from './Register.module.scss';
import LoginInput from '../Login/LoginInputs/LoginInputs'



class Register extends React.Component {
    constructor(props) {
        super(props);

        this.emailRef = React.createRef();
        this.nameRef = React.createRef();
        this.passwordRef = React.createRef();
        
    }

    handleRegister = (e) => {
        e.preventDefault();
        
        var data = {
            email: this.emailRef.current.refInput.current.value,
            name: this.nameRef.current.refInput.current.value,
            password: this.passwordRef.current.refInput.current.value,
        }

        console.log(JSON.stringify(data));

        fetch('http://localhost:9000/users',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data),
        })
        .then((response) => {
            console.log(response);
        })
    }

    lol = (e) => {
        e.preventDefault();
        
        var data = {
            email: this.emailRef.current.refInput.current.value,
            name: this.nameRef.current.refInput.current.value,
            password: this.passwordRef.current.refInput.current.value,
        }

        console.log(JSON.stringify(data));

        fetch('http://localhost:9000/users',{
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data),
        })
        .then((response) => {
            console.log(response);
        })

    }

    render() {
        console.log(this.emailRef)
        return(
            <div className = {Styles.Container}>
                <div className = {Styles.Inputs}>
                    <h1>Almost FilmWeb</h1>
                    <LoginInput ref = {this.emailRef} label = "e-mail" name = "Nick" type = 'text'/>
                    <LoginInput ref = {this.nameRef} label = "Nick" name = "Nick" type = 'text'/>
                    <LoginInput ref = {this.passwordRef} label = "Password" type = 'password' />
                    <button onClick = {this.handleRegister}>Zarejestruj</button>
                </div>
            </div>
        )

        
    }
}

export default Register