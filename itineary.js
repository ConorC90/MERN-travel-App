const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var itinSchema = new Schema({
  title: String,
  sub_title: String,
  profile_pic: String,
  cost: String,
  duration: String,
  cityName: String,
  hashTags: String
});

module.exports = mongoose.model("tour", itinSchema);
