import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import Carasole from "./Carasole";
import classnames from "classnames";
import heart from "../pictures/heartIcon.png";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      expanded: false,
      heartIsRed: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.heartClick = this.heartClick.bind(this);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleClick() {
    this.setState(function(prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  }

  // heartClick() {
  //   var element = document.getElementsByClassName("heartIcon");
  //   element.classList.toggle("myStyle");
  // }

  heartClick = () => {
    this.setState(prevState => ({ heartIsRed: !prevState.heartIsRed }));
  };

  putFav = () => {};

  render() {
    var tour = this.props.itin;
    var index = this.props.number;
    var classes = this.props.styles;
    return (
      <div>
        <Card className={classes.card} key={index} id={index}>
          <div className="nav">
            <Avatar className={classes.avatar}>
              <img src={tour.profile_pic} alt="profile pic" />
            </Avatar>

            <CardHeader
              // favspic={
              //   <div>
              //     <img src={heart} alt="favourite" className="heartIcon" />
              //   </div>
              // }
              className="cardHeader cityHeadersText"
              title={tour.title}
              subheader={
                "Duration" +
                ": " +
                tour.duration +
                "  " +
                "Cost" +
                ": " +
                tour.cost +
                " " +
                tour.hashTags
              }
            />
            <div
              className={
                this.state.heartIsRed ? "heartIcon myStyle" : "heartIcon"
              }
              onClick={this.heartClick}
            >
              <img src={heart} alt="favourite" />
              {/* className="heartIcon" */}
            </div>
          </div>

          <div className="textAlign">
            <IconButton
              onClick={this.handleExpandClick}
              // ? index === true : false
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
              />
              <p onClick={this.handleClick}>
                {this.state.isToggleOn ? "View More" : "View Less"}
              </p>
              <ExpandMoreIcon
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
              />
            </IconButton>
            <Collapse
              className="collapsedContent"
              in={this.state.expanded}
              timeout="auto"
              // unmountOnExit
            >
              <Typography paragraph>More Info:</Typography>
              <Typography paragraph>Activites</Typography>
              <Carasole />
              <TextField
                id="filled-with-placeholder"
                label="Comments"
                placeholder="Your comment"
                // className={classes.textField}
                margin="normal"
                variant="filled"
              />
            </Collapse>
          </div>
        </Card>
      </div>
    );
  }
}
export default Tour;
