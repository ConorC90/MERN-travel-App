import React, { Component } from "react";
import logo from "../pictures/MYtineraryLogo.png";
import arrow from "../pictures/arrow.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styling.css";
import { Link } from "react-router-dom";

class home extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="Home-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </p>
        </div>
        <div className="arrowDiv">
          <main id="page-wrap">
            <Link to="/cities/all">
              <img src={arrow} alt="Cities" className="arrow-logo" />{" "}
            </Link>
          </main>
        </div>

        <p>Popular MYtineraies</p>
      </div>
    );
  }
}
export default home;
