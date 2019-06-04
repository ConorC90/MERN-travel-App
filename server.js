const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
//Import the mongoose module
const mongoose = require("mongoose");
const app = express();
const City = require("./city");
const Tour = require("./itineary");
const citiesRouter = require("./api/citiesRouter");
const itinRouter = require("./api/itinRouter");
const users = require("./api/usersRouter");
const auth = require("./api/auth");
const comments = require("./api/commentsRouter");
const favourites = require("./api/favsRouter");
const google = require("./api/auth");
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});
app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.use("/cities", citiesRouter);
app.use("/tours", itinRouter);
app.use("/users", users);
app.use("/auth", auth);
app.use("/comments", comments);
app.use("/favourites", favourites);
// app.use("/google", auth);

app.get("/cities/:_id", (req, res) => {
  console.log(req.params);
});

// get an instance of router
const router = express.Router();

// router.post("/users/all", function(req, res) {
//   const user = new User({
//     name: req.body.name,
//     country: req.body.country
//   });

router.get("/", function(req, res) {
  res.send("im the home page!");
});

app.use("/", router);

app.listen(port, () => console.log(`Listening on port ${port}`));

//Set up default mongoose connection
const mongoDB = process.env.MONGODB;

mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log("working"))
  .catch(err => console.log(err));

//Get the default connection
// var db = mongoose.connection;

module.exports = app;
