import React from 'react'
import Styles from './Description.module.scss'

export const Description = (props) => { return(
    <div className={Styles.list} onClick = {props.onClick}>
      <h1>{props.title}</h1>
      <h2>Popularność: {props.popularity}</h2>
      <h3>ocena: {props.vote_average}</h3>   
    </div>
  )
}
