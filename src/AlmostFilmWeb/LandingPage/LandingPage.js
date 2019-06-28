import React from 'react';
import Styles from './LandingPage.module.scss';
import Header from './Header/Header'
import FilmList from './FilmList/FilmList'
class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <div>
                <div className = {Styles.LandingPage} > 
                    <Header />
                </div>
                <FilmList />
            </div>
            
        )
    }
}

export default LandingPage