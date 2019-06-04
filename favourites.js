const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavouritiesSchema = new Schema({
  toursId: String,
  name: String,
  favourite: Array
});

module.exports = mongoose.model("favourite", FavouritiesSchema);
