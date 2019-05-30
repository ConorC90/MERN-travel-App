import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import { googlelogin } from "../actions/authActions";
import GoogleLogin from "react-google-login";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";

import "../styling.css";
// import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    height: 50,
    width: 60
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    showPassword: false
  },
  avatar: {
    margin: 10,
    width: 150,
    height: 150
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250
  }
});

// const responseGoogle = response => {
//   console.log(response);
// };

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      // email: "",
      checkedA: false,
      showPassword: false,
      msg: null,
      open: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  static proprTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      //check for login error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const user = {
      username,
      password
    };
    //attempt to login
    this.props.login(user);
    this.handleClick(TransitionUp);
    this.setState({ open: true });
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleBoxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  responseGoogle = response => {
    console.log(response);
    const user = {
      username: response.profileObj.name,
      email: response.profileObj.email,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName
    };
    this.props.googlelogin(user);
    this.handleClick(TransitionUp);
    this.setState({ open: true });
  };

  onFailure = error => {
    console.log(error);
  };

  // class DirectionSnackbar extends React.Component {
  //   state = {
  //     open: false,
  //   };

  handleClick = Transition => () => {
    this.setState({ open: true, Transition });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div id="outer-container">
        <form onSubmit={this.onSubmit}>
          <div>
            <h2>Login</h2>
            <div className="linkDiv">
              <p>Username:</p>{" "}
              <TextField
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
                required
                id="standard-required"
                label="Required"
                className={classes.textField}
                margin="normal"
              />
            </div>
            <div className="linkDiv">
              <p>Password:</p>
              <TextField
                // type="text"
                name="password"
                // value={this.state.password
                // onChange={this.onChange}
                id="outlined-adornment-password"
                className={classNames(classes.margin, classes.textField)}
                type={this.state.showPassword ? "text" : "password"}
                label="Password"
                value={this.state.password}
                onChange={this.handleChange("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div className="linkDiv">
              <Checkbox
                checked={this.state.checkedA}
                onChange={this.handleBoxChange("checkedA")}
                value="checkedA"
              />
              <p>Remember me</p>
            </div>
            <div className="homeIconDiv">
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
              >
                OK
              </Button>
            </div>
            <div className="g-signin2" data-onsuccess="onSignIn" />
          </div>
        </form>
        <div className="homeIconDiv">
          <GoogleLogin
            clientId="442013113970-kd2aj4mg9jjfvfv2uatlqj9um5kd5cev.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={this.responseGoogle}
            onFailure={this.onFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>

        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={this.state.Transition}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">You are logged in</span>}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, googlelogin }
)(withStyles(styles)(Login));
