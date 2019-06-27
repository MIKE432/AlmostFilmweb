import React from 'react'
import Styles from './Description.module.scss'
import { Link } from 'react-router-dom' 

export const Description = (props) => { return(
    <Link to = {`/movies/${props.id}`}  className={Styles.list} onClick = {props.onClick}>
      <div className = {Styles.Container}>
        <div className = {Styles.Photo} style = {{backgroundImage: `url(https://image.tmdb.org/t/p/original${props.poster_path})`}} />
        <div className = {Styles.Description}>
          <h1>{props.title}{props.release_date}</h1>
        </div>
          <div className = {Styles.Vote}>
            <h1>{props.vote_average}</h1>
            <h2>{props.popularity}</h2>
          </div>
        </div>
    </Link>
  )
}
