class GetAllAudioRecords {
  constructor() {
    this.repository = ioc.use(
      "Apps/AudioRecorder/Repositories/AudioRecorderRepository"
    );
  }
  invoke(params) {
    return this.repository.all();
  }
}

module.exports = GetAllAudioRecords;
