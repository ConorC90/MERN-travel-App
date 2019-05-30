import React, { Component } from "react";

class Cityfilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityFilter: ""
    };
  }
  handleChange = e => {
    this.setState({
      cityFilter: e.target.value
    });
    this.props.onChange(this.state.cityFilter);
  };

  render() {
    return (
      <div className="cities-filter">
        <p>Filter our current cities:</p>
        <input
          type="text"
          placeholder="Search by city name"
          className="form-control"
          value={this.state.cityFilter}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Cityfilter;
