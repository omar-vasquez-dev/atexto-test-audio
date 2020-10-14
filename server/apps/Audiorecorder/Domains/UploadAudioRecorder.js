class UpdateAudioRecorder {
  constructor() {
    this.driver = global.ioc.use("Service/DriverAudioFilesService");
  }
  async invoke(metaName, audioBase64) {
    if (!metaName) throw Error("Required metaName");
    if (!audioBase64) throw Error("Required audioBase64");
    try {
      const dir = await this.driver.dirUpload();
      return await this.driver.saveFile(dir + metaName, audioBase64);
    } catch (error) {
      throw new Error("Error save file in: UpdateAudioRecorder");
    }
  }
}

module.exports = UpdateAudioRecorder;
