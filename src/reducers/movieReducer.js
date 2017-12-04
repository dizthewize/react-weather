import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/types';

const INITIAL_STATE = {
  all: [],
  movie: null
}
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, all: action.payload }
    case FETCH_MOVIE:
      return { ...state, movie: action.payload }
    default:
      return state;
  }
}
