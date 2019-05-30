import React from "react";
import ProFo from "../pictures/profileLogo.png";
import "../styling.css";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Logout from "./LogOut";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/authActions";

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <div>
        <MenuItem>
          <Logout logout={this.props.logout} />
        </MenuItem>
      </div>
    );

    const guestLinks = (
      <div>
        <MenuItem onClick={this.handleClose}>
          {<Link to="/login">Login</Link>}
        </MenuItem>
        <MenuItem onClick={this.handleClose}>
          {<Link to="/signUp">Sign Up</Link>}
        </MenuItem>
      </div>
    );

    return (
      <div>
        <img
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          src={ProFo}
          className="proFoLogo"
          alt="account options"
          open
        />

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {isAuthenticated ? authLinks : guestLinks}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(SimpleMenu);
