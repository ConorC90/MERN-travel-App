import React, { Component } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FavsPopUp extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div>
                <h3>MYtinerary added to your Favorites</h3>
                <p>Go to Favorites page</p>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Exit
            </Button>
          </DialogActions>
        </Dialog>
        <h2>A </h2>
        {/* <h2>{this.props.match.params.cityName}</h2> */}
        <FavsPopUp />
        <h4>Avaiable MYtineraries:</h4>
        {/* <ul>{tourList}</ul> */}
        <Link className="bottomLinks" to="/cities/all">
          <p>Choose another city...</p>
        </Link>
      </div>
    );
  }
}

export default FavsPopUp;
