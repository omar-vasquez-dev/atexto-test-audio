class GetAudioRecord {
  constructor() {
    this.driver = ioc.use("Service/DriverAudioFilesService");
  }

  async invoke(name) {
    if (!name) throw Error("Required name");
    try {
      let file = await this.driver.getFile(name);
      return file;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = GetAudioRecord;
