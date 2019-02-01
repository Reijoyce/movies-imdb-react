import React, { Component } from 'react'
import DisplayMovies from './DisplayMovies';

const url = 'http://www.omdbapi.com/'
const search_title = 's='
const key = '&apikey=3721fae7'

export class MovieList extends Component {
    state = {
        search: ''
    }

    componentDidUpdate() {
        if (this.state.search != this.props.searchTitle) {
            this.state.search = this.props.searchTitle;
            this.findMovie(this.props.searchTitle);
        }
    }

    findMovie(searchTitle) {
        fetch(`${url}?${search_title}${searchTitle}${key}`)
        .then(response => response.json())
        .then(result => this.setMovieResult(result))
    }

    setMovieResult(result) {
        console.log(result);
        this.setState({ movie: result })
        console.log(this.state)
    }

    render() {
        if (!this.state.movie || !this.state.movie.Search) {
            return (
                <div></div>
            )
        }

        return (
        <div>
            {this.state.movie.Search.map((movie) => <DisplayMovies movie={movie} />)}
        </div>
        )
    }
}

export default MovieList
