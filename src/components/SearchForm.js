import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchForm extends Component {
  state = {
    searchText: ''
  };

  onSearchChange(e) {
    const searchText = e.target.value;

    this.setState({ searchText });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.searchText) {
      this.setState({ error: 'Please provide search text' });
    } else {
      this.setState({ error: ''});
      this.props.onSubmit({
        searchText: this.state.searchText
      });
    }
  }

  render() {
    return (
      <div className="search-form">
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder='Search'
            value={this.state.searchText}
            onChange={this.onSearchChange.bind(this)}
          />
        </form>
      </div>
    );
  }
}
