class GetAudioRecordInDrive {
  constructor() {
    this.driver = global.ioc.use("Service/DriverAudioFilesService");
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

module.exports = GetAudioRecordInDrive;
