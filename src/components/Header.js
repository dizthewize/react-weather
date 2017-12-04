import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <nav id="nav">
        <div className="logo">
          <Link to="/"><h2>Movies</h2></Link>
        </div>
      </nav>
    );
  }
}



export default Header;
