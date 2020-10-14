class DeleteAudioRecord {
  constructor() {
    this.repository = global.ioc.use(
      "Apps/AudioRecorder/Repositories/AudioRecorderRepository"
    );
  }

  async invoke(audioId) {
    if (!audioId) throw Error("Required audioId");
    try {
      let file = await this.repository.delete(audioId);
      return file;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DeleteAudioRecord;
