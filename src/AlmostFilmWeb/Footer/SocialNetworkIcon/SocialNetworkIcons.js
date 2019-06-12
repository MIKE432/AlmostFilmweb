import React from 'react'
import Styles from './SocialNetworkIcons.module.scss'



class socialIcons extends React.Component {
    
    state ={
        fb: false,
        instagram: false,
        twitter: false
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <div className = {StyleSheet.Container}>
                <div className = {Styles.facebook} />
                <div className = {Styles.instagram} />
                <div className = {Styles.twitter} />
            </div>
        )
    }
} 

export default socialIcons