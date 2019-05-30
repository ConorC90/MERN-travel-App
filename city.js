const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

var citySchema = new Schema({
  name: String,
  country: String
});

module.exports = mongoose.model("city", citySchema);
