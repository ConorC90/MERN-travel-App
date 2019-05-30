import React, { Component } from "react";
import "../styling.css";
import house from "../pictures/homeIcon.png";

import { Link } from "react-router-dom";

class footer extends Component {
  render() {
    return (
      <footer>
        <Link to="/">
          <img src={house} alt="Home page" className="homeIcon" />
        </Link>
      </footer>
    );
  }
}

export default footer;
