class CreateAudioRecorder {
  constructor() {
    this.repository = ioc.use(
      "Apps/AudioRecorder/Repositories/AudioRecorderRepository"
    );
  }

  async invoke(name, metadata) {
    if (!name) throw Error("Required name");
    if (!metadata) throw Error("Required name");
    let nAudioModel = null;
    try {
      nAudioModel = await this.repository.create(name, metadata);
    } catch (error) {
      throw error;
    }
    return nAudioModel;
  }
}

module.exports = CreateAudioRecorder;
