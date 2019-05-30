import React, { Component } from "react";
import "../styling.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cities from "./Cities";
import login from "./Login";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./LoginIcon";
import Itinerary from "./Itinerary";
import SignUp from "./SingUp";
// import SaftyNet from "./saftynet";
import { loadUser } from "../actions/authActions";
import store from "./Store";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  state = {};

  render() {
    return (
      <div className="App">
        <Router>
          <div id="test">
            <div id="outer-container">
              <main id="page-wrap">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/cities/all" component={Cities} />
                  <Route exact path="/cities/:cityName" component={Itinerary} />
                  <Route path="/login" component={login} />
                  <Route path="/signUp" component={SignUp} />
                  {/* <Route path="/saftynet" component={SaftyNet} /> */}
                </Switch>
              </main>
            </div>
            <div className="header">
              <Header
                menuOpen={this.state.menuOpen}
                closeMenu={() => this.closeMenu()}
              />
              <Login />
            </div>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
