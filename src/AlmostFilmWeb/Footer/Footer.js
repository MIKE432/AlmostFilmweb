import React from 'react'
import Styles from './Footer.module.scss'
import Icons from './SocialNetworkIcon/SocialNetworkIcons'


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = {Styles.Footer}>
                <h1>ApusArt</h1>
                <div className = {Styles.Container}>
                    <div className = {Styles.Section}>
                        <h2>News</h2>
                    </div>
                    <div className = {Styles.Section}>
                        <h2>Films</h2>
                    </div>
                    <Icons />
            

                </div>
            </div>
        )
    }
}

export default Footer;