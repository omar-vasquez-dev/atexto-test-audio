const { v4 } = require("uuid");

class AppController {
  constructor() {
    this.dAudioRecorders = global.ioc.use(
      "Apps/AudioRecorder/Domains/GetAllAudioRecords"
    );
    this.dAudioCreator = global.ioc.use(
      "Apps/AudioRecorder/Domains/CreateAudioRecorder"
    );
    this.dUploadAudioRecorder = global.ioc.use(
      "Apps/AudioRecorder/Domains/UploadAudioRecorder"
    );
    this.dGetAudioRecord = global.ioc.use(
      "Apps/AudioRecorder/Domains/GetAudioRecord"
    );
  }

  /**
   * @returns array [AudioE]
   */
  getAllRecorders() {
    return this.dAudioRecorders.invoke();
  }

  async createAudioRecorder(ctx) {
    const name = ctx.request.body.name;
    const b64Audio = ctx.request.body.audio;
    const audioId = v4();
    const nAudioData = await this.dAudioCreator.invoke(name, audioId + name);
    await this.dUploadAudioRecorder.invoke(nAudioData.metadata, b64Audio);
    return nAudioData;
  }

  async getAudioRecord(ctx) {
    console.log(ctx.params);
    return this.dGetAudioRecord.invoke(ctx.params.name);
  }
}

module.exports = AppController;
