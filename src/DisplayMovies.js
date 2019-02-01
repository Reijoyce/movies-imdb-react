import React, { Component } from 'react'
import MovieActionButton from './MovieActionButton'


export class DisplayMovies extends Component {
  render() {
    
    return (
      <div className="movie-list">
        <div className="movie-title">{this.props.movie.Title}</div>
        <img className="movie-img" src={this.props.movie.Poster} />
        <div className="movie-year">{this.props.movie.Year}</div>
        <MovieActionButton  movie={this.props.movie}/>
      </div>
    )
  }
}

export default DisplayMovies
