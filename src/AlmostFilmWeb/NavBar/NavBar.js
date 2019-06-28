import React from 'react';
import Styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login'


class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
        }
    }

    handleLoginClick = () => {
        this.setState({isLogin: !this.state.isLogin})
    }

    render() {
        const { isLogin } = this.state;
        return(
            <div className={Styles.NavBar}>
                <div className = {Styles.logo}>
                    <NavLink className = {Styles.Logo} to = "/"  >Prawie FilmWeb</NavLink>
                </div>
                
                <div className = {Styles.options}>
                    <NavLink to ="/Nowosci" className = {Styles.Buttons} >Nowości</NavLink>
                    <NavLink to = "/Search" className = {Styles.Buttons}>Search</NavLink>
                    <div className = {Styles.Buttons} onClick = {this.handleLoginClick}>Zaloguj</div>
                    {
                        isLogin ? (<Login />) : (null)
                    }
                    <NavLink to = "/Register" className = {Styles.Buttons}>Zarejestruj się</NavLink>
                </div>
            </div>
        )
    }
}
export default NavBar