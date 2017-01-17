import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    // Fetch Weather Data
    this.props.fetchWeather(this.state.term);
    // Clear Input
    this.setState({term: ''});
  }

  render() {
    const {term} = this.state;
    return (
      <div className="search-bar">
        <form
          onSubmit={this.onFormSubmit}
          className="input-group">
          <input
            placeholder="Get a five-day forecast in your favorite cities"
            value={term}
            onChange={this.onInputChange}
            className="form-control" />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

export default connect(null, {fetchWeather})(SearchBar);
