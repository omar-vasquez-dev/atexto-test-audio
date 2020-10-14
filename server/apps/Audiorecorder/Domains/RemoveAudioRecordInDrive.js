class RemoveAudioRecordInDrive {
  constructor() {
    this.driver = global.ioc.use("Service/DriverAudioFilesService");
  }

  async invoke(nameFile) {
    if (!nameFile) throw Error("Required nameFile");
    try {
      let file = await this.driver.removeFile(nameFile);
      return file;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RemoveAudioRecordInDrive;
