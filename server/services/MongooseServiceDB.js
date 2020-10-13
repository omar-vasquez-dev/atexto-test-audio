const mongoose = require("mongoose");

class MongooseServiceDB {
  async connect() {
    return mongoose.connect("mongodb://localhost:27017/audiodb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

module.exports = MongooseServiceDB;
