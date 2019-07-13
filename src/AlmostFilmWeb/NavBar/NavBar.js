import React from 'react';
import Styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login'
import { store } from '../../index'




class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
            isLogged: false
        }

        store.subscribe(this.handleLogin)

    }

    handleLoginClick = () => {
        this.setState({isLogin: !this.state.isLogin})
    }

    handleLogin = () => {
        this.setState({isLogin: true, isLogged: true})
    }

    render() {
        const { isLogin, isLogged } = this.state;
        return(
            <div className={Styles.NavBar}>
                <div className = {Styles.logo}>
                    <NavLink className = {Styles.Logo} to = "/"  >Prawie FilmWeb</NavLink>
                </div>
                
                <div className = {Styles.options}>
                    <NavLink to ="/Nowosci" className = {Styles.Buttons} >Nowości</NavLink>
                    <NavLink to = "/Search" className = {Styles.Buttons}>Search</NavLink>
                    {
                        !isLogged ? (<div className = {Styles.Buttons} onClick = {this.handleLoginClick}>Zaloguj</div>) : (<NavLink to = "/user" className = {Styles.Buttons}>Profil</NavLink>)
                    }
                    {
                        (isLogin && !isLogged) ? (<Login />) : (null)
                    }
                    {
                        !isLogged ? (<NavLink to = "/Register" className = {Styles.Buttons}>Zarejestruj się</NavLink>) : (null)
                    }
                </div>
            </div>
        )
    }
}
export default NavBar