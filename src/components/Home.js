import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SearchForm from './SearchForm';

class Home extends Component {
  constructor() {
    super();

    this.renderMovies = this.renderMovies.bind(this);
  }

  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  renderMovies() {
    const { movies } = this.props;
    return movies.map(movie => {
      return (
        <div className="col-md-3" key={movie.id}>
          <div className="well text-center">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
            <div className="text">
              <h5>{movie.title}</h5>
              <Link to={`movie/${movie.id}`} className='btn btn-primary'>More Details</Link>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { movies, fetchMovies } = this.props;
    console.log(movies);
    return (
      <div id="home-page">
        <div className="search well">
          <h2>Search Any Movie</h2>
          <SearchForm
            onSubmit={({searchText}) => fetchMovies(searchText)}
          />
        </div>
        <div className="movies-list">
          <div id='movies' className="row">
            {this.renderMovies()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
  return { movies: movies.all };
}

export default connect(mapStateToProps, actions)(Home);
