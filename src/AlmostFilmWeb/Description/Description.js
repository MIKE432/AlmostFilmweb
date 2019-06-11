import React from 'react'
import Styles from './Description.module.scss'
import { Link } from 'react-router-dom' 

export const Description = (props) => { return(
    <Link to = {`/movies/${props.id}`}  className={Styles.list} onClick = {props.onClick}>
      <h1>{props.title}</h1>
      <h2>Popularność: {props.popularity}</h2>
      <h3>ocena: {props.vote_average}</h3>   
    </Link>
  )
}
