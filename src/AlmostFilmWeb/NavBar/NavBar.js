import React from 'react';
import Styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 0,
        }
    }

    


    render() {
        return(
            <div className={Styles.NavBar}>

                <NavLink to = "/" className = {Styles.Logo} >Prawie FilmWeb</NavLink>
                <NavLink to ="/Nowosci" className = {Styles.Buttons} >Nowości</NavLink>
                <NavLink className = {Styles.Buttons}>Baza Filmów</NavLink>
                <NavLink className = {Styles.Buttons}>Forum</NavLink>

            </div>
        )
    }
}

export default NavBar