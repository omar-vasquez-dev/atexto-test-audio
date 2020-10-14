class UpdateNameAudioRecord {
  constructor() {
    this.repository = global.ioc.use(
      "Apps/AudioRecorder/Repositories/AudioRecorderRepository"
    );
  }

  async invoke(obId, nName) {
    if (!nName) throw Error("Required name");
    if (!obId) throw Error("Required _id");
    try {
      let file = await this.repository.update(obId, { name: nName });
      return file;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UpdateNameAudioRecord;
