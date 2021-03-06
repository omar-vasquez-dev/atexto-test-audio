class GetAudioRecord {
  constructor() {
    this.repository = global.ioc.use(
      "Apps/AudioRecorder/Repositories/AudioRecorderRepository"
    );
  }

  async invoke(audioId) {
    if (!audioId) throw Error("Required audioId");
    try {
      let file = await this.repository.find(audioId);
      return file;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = GetAudioRecord;
