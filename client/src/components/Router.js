import React, { Component } from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cities from "./Cities";
import login from "./Login";
import signUp from "./SingUp";
import Home from "./Home";
import SaftyNet from "./saftynet";

class Router1 extends Component {
  render() {
    return (
      <div className="router">
        <Router>
          <div id="test">
            <div id="outer-container">
              <main id="page-wrap">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/cities" component={Cities} />
                  <Route path="/login" component={login} />
                  <Route path="/signUp" component={signUp} />
                  {/* <Route path="/saftynet" component={SaftyNet} /> */}
                </Switch>
              </main>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Router1;
