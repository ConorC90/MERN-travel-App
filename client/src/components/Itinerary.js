import React, { Component } from "react";
import { connect } from "react-redux";
import { getTours } from "../actions/itinActions";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tour from "./Tour";
import { Link } from "react-router-dom";
import "../styling.css";

const styles = theme => ({
  card: {
    maxWidth: 800,
    width: 350
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});

class Tours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: [],
      other: []
    };
  }

  componentDidMount() {
    this.props.getTours(this.props.match.params.cityName);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tours: nextProps.tours.tours
    });
  }

  render() {
    var tours = this.props.tours.payload;
    const { classes } = this.props;

    var tourList = tours.map((tour, index) => (
      <Tour itin={tour} number={index} styles={classes} />
    ));

    return (
      <div>
        <h2>{this.props.match.params.cityName}</h2>
        {/* <FavsPopUp /> */}
        <h4>Avaiable MYtineraries:</h4>
        <ul>{tourList}</ul>
        <Link className="bottomLinks" to="/cities/all">
          <p>Choose another city...</p>
        </Link>
      </div>
    );
  }
}

Tours.propTypes = {
  getItems: PropTypes.func,
  // classes: PropTypes.object.isRequired,
  tours: PropTypes.object
};

const mapStateToProps = state => ({
  tours: state.itineraries
});

export default connect(
  mapStateToProps,
  { getTours }
)(withStyles(styles)(Tours));
