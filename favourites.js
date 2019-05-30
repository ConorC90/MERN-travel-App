const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var FavouritiesSchema = new Schema({
  toursId: String,
  name: String,
  favourite: Array
});

module.exports = mongoose.model("favourite", FavouritiesSchema);
