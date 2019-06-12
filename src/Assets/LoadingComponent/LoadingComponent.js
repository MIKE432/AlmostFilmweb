import React from 'react'
import LoadingPNG from '../../Assets/LoadingPNG.png'
import Styles from './LoadingComponent.module.scss'

export const LoadingComponent = () => {
    return(
    <div className = {Styles.container}>
        <img src = {LoadingPNG} className = {Styles.LoadingComponent}  alt = ''/>
    </div>
    )
}