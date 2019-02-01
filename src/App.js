import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import SearchMovies from './SearchMovies';
import WantWatch from './WantWatch'
import Watched from './Watched'

class App extends Component {
  render() {
    return (
     
      <div className="App">
        <Header />
        <Route exact path='/' render={()=>(
          <Link to='/SearchMovies' className='link'>      
            <div className='click'>Search!</div>
          </Link>
        )} />

        <Route exact path='/' render={()=>(
          <Link to='/WantWatch' className='link'>
            <div className='click'>Want Watch!</div>
          </Link>
        )} />
        <Route exact path='/' render={()=>(
          <Link to='/Watched' className='link'>
            <div className='click'>Watched!</div>
          </Link>
        )} />
       
        <Route path='/SearchMovies' component={SearchMovies}> </Route>
        <Route path='/WantWatch' component={WantWatch}> </Route>
        <Route path='/Watched' component={Watched}> </Route>
      </div>   
    );
  }
}

export default App;


        