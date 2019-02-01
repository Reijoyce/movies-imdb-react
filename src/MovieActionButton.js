import React, { Component } from 'react'
import Database from './Database'


export class MovieActionButton extends Component {
    state = {
        clicked: false
    }

  clickWantWatch() {
    Database.setWantWatch(this.props.movie);
    this.state.clicked = true;
    this.forceUpdate();
  }

  clickWatched() {
    Database.setWatched(this.props.movie);
    this.state.clicked = true;
    this.forceUpdate();
  }

  render() {
      Database.getWantWatch().map((movie) => 
        this.state.clicked = this.state.clicked || (movie.imdbID == this.props.movie.imdbID)
      );
      Database.getWatched().map((movie) => 
        this.state.clicked = this.state.clicked || (movie.imdbID == this.props.movie.imdbID)
      );

      if (this.state.clicked) {
          return (
              <div></div>
          );
      }
    return (
      <div>
      <button className="button1" onClick={() => this.clickWantWatch()} >
         Want Watch
      </button>
      <button className="button2" onClick={() => this.clickWatched()} >
         Already Watched
      </button>
      </div>
    )
  }
}

export default MovieActionButton
