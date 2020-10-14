class GetAllAudioRecords {
  constructor() {
    this.repository = global.ioc.use(
      "Apps/AudioRecorder/Repositories/AudioRecorderRepository"
    );
  }
  invoke({ search = null, orderBy = "CREATED" }) {
    let filter = {};
    if (search) {
      filter = { name: { $regex: ".*" + search + ".*" }, ...filter };
    }
    return this.repository.all({ ...filter }, orderBy);
  }
}

module.exports = GetAllAudioRecords;
