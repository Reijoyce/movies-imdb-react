import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MovieList from './MovieList';

const title = ""

class SearchMovies extends Component {

  state = {
    movie: '',
    searchTitle: [title]
  }

  onChange(event) {
    console.log(event.target.value)
    this.setState({searchTitle: event.target.value});
  }

  render() {
    return (
      <div>    
        <Link to='/'
          className='back-home-page'> 
          <div>Home Page</div>
        </Link>

        <div> 
          <form>
            <p className="searchtitle">Search your movie here!!</p>
            <input 
              className='input'
              type='text'
              placeholder="Type your movie"
              value={this.state.searchTitle}
              onChange={this.onChange.bind(this)}>
            </input>
          </form>
          <div>        
            <MovieList searchTitle={this.state.searchTitle}/>  
          </div> 
        </div>
      </div>
    )
  }
}

export default SearchMovies

