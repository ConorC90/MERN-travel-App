import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import countryList from "react-select-country-list";
import PropTypes from "prop-types";
import { register } from "../actions/authActions";
import { connect } from "react-redux";
import "../styling.css";

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
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.options = countryList();
    this.state = {
      options: this.options,
      amount: "",
      password: "",
      weight: "",
      weightRange: "",
      showPassword: false,
      checkedA: false,
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      country: "hello"
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  static proprTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {}

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      username,
      password,
      email,
      firstName,
      lastName,
      country
    } = this.state;

    //Create user object
    const newUser = {
      username,
      password,
      email,
      firstName,
      lastName,
      country
    };
    //attempt to register
    this.props.register(newUser);
  }

  // handelSubmit(e) {
  //   e.preventDefault();
  //   const user = {
  //     username: this.state.username,
  //     password: this.state.password,
  //     email: this.state.email,
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName,
  //     country: this.state.country
  //   };
  //   Axios.post("");
  // }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  handleBoxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="signUpPage">
        <div id="outer-container">
          <div>
            <h2>Create Account</h2>
            <div className="homeIconDiv">
              <Avatar className={classes.avatar}>"hello" /></Avatar>
            </div>
            {/* <form action="/action_page.php" method="post"> */}
            <form onSubmit={this.onSubmit}>
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
                  value={this.state.password}
                  // onChange={this.onChange}
                  id="outlined-adornment-password"
                  className={classNames(classes.margin, classes.textField)}
                  type={this.state.showPassword ? "text" : "password"}
                  label="Password"
                  // value={this.state.password}
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
                <p>Email:</p>
                <TextField
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                  id="standard-required"
                  label="Required"
                  className={classes.textField}
                  margin="normal"
                />{" "}
              </div>
              <div className="linkDiv">
                <p>First Name:</p>
                <TextField
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  required
                  id="standard-required"
                  label="Required"
                  className={classes.textField}
                  margin="normal"
                />
              </div>
              <div className="linkDiv">
                <p>Last Name:</p>
                <TextField
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  required
                  id="standard-required"
                  label="Required"
                  className={classes.textField}
                  margin="normal"
                />
              </div>
              <div className="linkDiv">
                <p>Country:</p>
                <TextField
                  type="text"
                  name="country"
                  value={this.state.country}
                  onChange={this.onChange}
                  select
                  className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Your country"
                  // value={this.state.weightRange}
                  // onChange={this.onChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        Select Country
                      </InputAdornment>
                    )
                  }}
                >
                  {/* {options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))} */}

                  {/* <MenuItem value={this.state.country}>Ireland</MenuItem> */}
                  {/* <MenuItem>Ireland</MenuItem>
                  <MenuItem>Ireland</MenuItem>
                  <MenuItem>Ireland</MenuItem> */}
                </TextField>
              </div>
              <div className="linkDiv">
                <Checkbox
                  checked={this.state.checkedA}
                  onChange={this.handleBoxChange("checkedA")}
                  value="checkedA"
                />
                <p>I have read MYtinearys T and C's</p>
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
            </form>
          </div>
        </div>
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
  { register }
)(withStyles(styles)(SignUp));
