const AudioModel = require("./../Data/AudioModel");

class AudioRecorderRepository {
  constructor() {
    this.client = ioc.use("Service/MongooseClient");
  }

  async all() {
    const db = await this.client.connect();
    const Audio = db.model("AudioModel", AudioModel);
    const collection = await Audio.find({});
    return collection;
  }

  async create(name, metadata) {
    const db = await this.client.connect();
    const Audio = db.model("AudioModel", AudioModel);
    const nAudio = new Audio({ name, metadata });
    nAudio.save();
    return nAudio.toJSON();
  }

  async delete(obId) {
    const db = await this.client.connect();
    const Audio = db.model("AudioModel", AudioModel);
  }
}

module.exports = AudioRecorderRepository;
