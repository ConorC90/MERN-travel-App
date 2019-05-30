import React, { Component } from "react";

import PropTypes from "prop-types";

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <div onClick={this.props.logout}>Logout</div>;
  }
}
export default Logout;
