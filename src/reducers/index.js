import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import userReducer from './userReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  // user: userReducer
  form: reduxForm,
  movies: movieReducer
});

export default rootReducer;
