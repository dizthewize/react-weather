import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Home from './Home';
const Header = () => <h1>Header</h1>

class App extends Component {

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
