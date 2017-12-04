import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Home from './Home';
import MovieInfo from './MovieInfo';


class App extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/movie/:id" component={MovieInfo} />
                </Switch>
            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
