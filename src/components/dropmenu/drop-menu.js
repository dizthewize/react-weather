import React, { Component } from 'react';
import { NavLink,
         Link,
         withRouter } from 'react-router-dom';

class DropMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    const currState = this.state.active;
    this.setState({ active: !currState });
  }

  render() {
    return (
      <div id="drop-menu" className={this.state.active ? 'visible' : false }>
        <div id="menu-btn" onClick={this.toggleClass}>
          <span></span>
          <span></span>
          <span></span>
        </div>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
      </div>
    );
  }
}

export default withRouter(DropMenu);
