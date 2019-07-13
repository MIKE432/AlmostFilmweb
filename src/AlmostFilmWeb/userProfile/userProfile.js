import React from 'react'
import { store } from '../../index'
import { UserAbout } from './userAbout/userAbout'
import Styles from './userProfile.module.scss'
import { Photo } from './photo/photo'

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: store.getState().userLogin.user.name,
            email: store.getState().userLogin.user.email
        }
    }

    render() {
        return(
            <div className = {Styles.Profile}>
                <Photo />
                <UserAbout name = {this.state.name} email = {this.state.email}></UserAbout>
            </div>
        )
    }
}

export default UserProfile