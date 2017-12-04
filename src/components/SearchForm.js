import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchForm extends Component {
  state = {
    term: ''
  };

  onSearchChange(e) {
    const term = e.target.value;

    this.setState({ term });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.term) {
      this.setState({ error: 'Please provide a term' });
    } else {
      this.setState({ error: ''});
      this.props.onSubmit(this.state.term);
    }
  }

  render() {
    return (
      <div className="search-form">
        {this.state.error && <p>{this.state.error}</p>}
        <form className='input-group' onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            className='form-control'
            placeholder='Get a five-day weather forecast'
            value={this.state.term}
            onChange={this.onSearchChange.bind(this)}
          />
          <span className="input-group-btn">
            <button type='submit' className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}
