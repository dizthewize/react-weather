import axios from 'axios';
import {
  FETCH_USER,
  POST_USER,
  FETCH_MOVIES,
  FETCH_MOVIE
} from './types';

// export const submitUser = values => async dispatch => {
//   const res = await axios.post('/auth/login', values)
//   .then(res => {
//     dispatch({ type: POST_USER });
//   })
//   .catch(err => {
//     dispatch({ type: POST_USER, payload: err})
//   });
// };
//
// export const submitRegister = values =>
//   async dispatch => {
//     const res = await axios.post('/auth/register', values)
//       .then(res => {
//         dispatch({type: POST_USER});
//       })
//       .catch(err => {
//         dispatch({type: POST_USER, payload: err})
//       });
// }
//
// export const fetchUser = () => async dispatch => {
//   const res = await axios.get('/api/current_user')
//     .then(res => {
//       dispatch({ type: FETCH_USER, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: FETCH_USER, payload: err });
//     });
// };

// export const fetchMovies = searchText => async dispatch => {
//   const API_KEY = process.env.REACT_APP_API_KEY;
//   const res = await axios.get(`http://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}`);
//   dispatch({ type: FETCH_MOVIES, payload: res.data.Search });
// }

export const fetchMovies = searchText => async dispatch => {
  const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fa155f635119344d33fcb84fb807649b&query=${searchText}`);
  dispatch({ type: FETCH_MOVIES, payload: res.data.results });
}

export const fetchMovie = id => async dispatch => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fa155f635119344d33fcb84fb807649b`);
  dispatch({ type: FETCH_MOVIE, payload: res.data });
}
