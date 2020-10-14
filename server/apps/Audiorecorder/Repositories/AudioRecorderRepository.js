const AudioModel = require("./../Data/AudioModel");

class AudioRecorderRepository {
  constructor() {
    this.client = global.ioc.use("Service/MongooseClient");
  }

  async all(filter, orderBy) {
    const db = await this.client.connect();
    const Audio = db.model("AudioModel", AudioModel);
    if (orderBy === "ALPHABETH") {
      return Audio.find({ ...filter }).sort({ name: "asc" });
    }
    return Audio.find({ ...filter }).sort({ created_at: -1 });
  }

  async find(_id) {
    const db = await this.client.connect();
    const Audio = db.model("AudioModel", AudioModel);
    const nAudio = await Audio.findOne({ _id });
    return nAudio.toJSON();
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
    const result = await Audio.deleteOne({ _id: obId });
    return result.ok ? true : false;
  }

  async update(obId, data) {
    const db = await this.client.connect();
    const Audio = db.model("AudioModel", AudioModel);
    const result = await Audio.updateOne({ _id: obId }, { ...data });
    return result.ok ? true : false;
  }
}

module.exports = AudioRecorderRepository;
