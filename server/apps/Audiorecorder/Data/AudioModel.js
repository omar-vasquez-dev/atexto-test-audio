const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AudioModel = new Schema({
  name: String,
  metadata: String,
});

module.exports = AudioModel;
