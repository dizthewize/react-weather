import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { fetchWeather } from '../actions';

import SearchForm from './SearchForm';
import WeatherList from './WeatherList';

class Home extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    const { fetchWeather } = this.props;
    fetchWeather()
  }

  // renderMovies() {
  //   const { movies } = this.props;
  //   return movies.map(movie => {
  //     return (
  //       <div className="col-md-3" key={movie.id}>
  //         <div className="well text-center">
  //           <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
  //           <div className="text">
  //             <h5>{movie.title}</h5>
  //             <Link to={`movie/${movie.id}`} className='btn btn-primary'>More Details</Link>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  render() {
    const { fetchWeather } = this.props;
    return (
      <div id="home-page">
        <div className="search">
          <SearchForm onSubmit={term => fetchWeather(term)} />
        </div>
        <div className="weather-list">
          <WeatherList />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Home);
