import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions'

class MovieInfo extends Component {
  componentWillMount() {
    const { fetchMovie } = this.props;
    fetchMovie(this.props.match.params.id);
  }

  render() {
    const { movies } = this.props;

    if (!movies) {
      return <div>Loading...</div>
    }

    return (
      <div id='movie' className="row">
        <div className="col-md-4">
          <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="movie image" className="thumbnail"/>
        </div>
        <div className="col-md-8">
          <h2>{movies.title}</h2>
          <ul className="list-group">
            <li className="list-group-item"><strong>Released:</strong> {movies.release_date}</li>
            <li className="list-group-item"><strong>Rated:</strong> {movies.vote_average}</li>
            <li className="list-group-item"><strong>Rate Count:</strong> {movies.vote_count}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="well">
              <h3>{movies.overview}</h3>
              <hr/>
              <a href={`http://imdb.com/title/${movies.imdb_id}`} className='btn btn-primary'>View on IMDB</a>
              <Link to='/' className='btn btn-default'>Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps({ movies }) {
  return { movies: movies.movie };
}

export default connect(mapStateToProps, { fetchMovie })(MovieInfo);
