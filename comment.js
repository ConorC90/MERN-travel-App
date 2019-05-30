const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var commentSchema = new Schema({
  toursId: String,
  name: String,
  comment: String
});

module.exports = mongoose.model("comment", commentSchema);
