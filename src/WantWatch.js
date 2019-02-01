import React, { Component } from 'react'
import Database from "./Database";
import DisplayMovies from "./DisplayMovies";
import { Link } from "react-router-dom";

export class WantWatch extends Component {
  render() {
    return (
      <div>
        <Link to='/'
          className='back-home-page'> 
          <div>Home Page</div>
          </Link>
          <p className="want-title">Want Watch!!!</p> 
          {Database.getWantWatch().map((movie) => <DisplayMovies movie={movie} />)}        
      </div>
    )
  }
}

export default WantWatch
