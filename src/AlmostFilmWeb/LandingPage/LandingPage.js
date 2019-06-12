import React from 'react';
import Styles from './LandingPage.module.scss';
import Header from './Header/Header'

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <div className = {Styles.LandingPage} > 
                <Header />
            </div>
        )
    }
}

export default LandingPage