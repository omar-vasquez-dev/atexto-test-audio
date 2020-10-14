const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaOptions = {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

const AudioModel = new Schema(
  {
    name: String,
    metadata: String,
  },
  schemaOptions
);

module.exports = AudioModel;
