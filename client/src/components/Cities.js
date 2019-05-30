import React, { Component } from "react";
import { connect } from "react-redux";
import { getCities } from "../actions/cityActions";
import PropTypes from "prop-types";
import "../styling.css";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      cityFilter: ""
    };
  }
  componentDidMount() {
    this.props.getCities();
  }

  handleChange = e => {
    this.setState({
      cityFilter: e.target.value
    });
  };

  render() {
    console.log(this.props);
    const cities = this.props.cities.payload;
    console.log(cities);
    let filteredCities = cities.filter(city => {
      let cityName = city.name.toLowerCase();
      return cityName.indexOf(this.state.cityFilter.toLowerCase()) !== -1;
    });
    const cityList = filteredCities.map((city, index) => (
      <div className="cityHeaders" key={index}>
        <Card className="cityHeadersText">
          <Link to={`/cities/${city.name}`}>
            <CardContent>{city.name}</CardContent>
          </Link>
        </Card>
      </div>
    ));

    return (
      <div>
        <div className="cityFilter">
          <p>Filter by City: </p>
          <TextField
            id="filled-with-placeholder"
            label="Filter"
            placeholder="City name"
            // className={classes.textField}
            margin="normal"
            variant="filled"
            value={this.state.cityFilter}
            onChange={this.handleChange}
          />
        </div>
        <ul>{cityList}</ul>
      </div>
    );
  }
}

Cities.propTypes = {
  getItems: PropTypes.func,
  cities: PropTypes.object
};

const mapStateToProps = state => ({
  cities: state.cities
});

export default connect(
  mapStateToProps,
  { getCities }
)(Cities);
