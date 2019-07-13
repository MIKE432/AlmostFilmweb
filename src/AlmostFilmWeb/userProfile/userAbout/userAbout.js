import React from 'react'
import Styles from './userAbout.module.scss'

export const UserAbout = ( props ) => {
    return(
        <div className = {Styles.About}>
            <h1>{props.name}</h1>
            <span>{props.email}</span>
        </div>
    )
}