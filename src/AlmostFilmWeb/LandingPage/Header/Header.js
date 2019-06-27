import Styles from './Header.module.scss';
import React from 'react';



class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            
            <div className = {Styles.header}>
                <h1 className = {Styles.welcome} >Welcome to</h1>
                <h2 className = {Styles.title}>Almost Filmweb</h2>   
            </div>
        )
    }
}

export default Header