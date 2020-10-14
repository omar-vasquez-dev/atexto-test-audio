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
    this.dGetAudioRecordInDrive = global.ioc.use(
      "Apps/AudioRecorder/Domains/GetAudioRecordInDrive"
    );
    this.dRemoveAudioRecordInDrive = global.ioc.use(
      "Apps/AudioRecorder/Domains/RemoveAudioRecordInDrive"
    );
    this.dDeleteAudioRecord = global.ioc.use(
      "Apps/AudioRecorder/Domains/DeleteAudioRecord"
    );
    this.dGetAudioRecord = global.ioc.use(
      "Apps/AudioRecorder/Domains/GetAudioRecord"
    );
    this.dUpdateNameAudioRecord = global.ioc.use(
      "Apps/AudioRecorder/Domains/UpdateNameAudioRecord"
    );
  }

  /**
   * @returns array [AudioE]
   */
  getAllRecorders(ctx) {
    const orderBy = ctx.request.query.orderBy;
    const search = ctx.request.query.search;
    return this.dAudioRecorders.invoke({ orderBy, search });
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
    try {
      return this.dGetAudioRecordInDrive.invoke(ctx.params.name);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteAudioRecord(ctx) {
    const audioId = ctx.request.body.audioId;
    try {
      const nAudio = await this.dGetAudioRecord.invoke(audioId);
      const resultDelete = await this.dDeleteAudioRecord.invoke(audioId);
      await this.dRemoveAudioRecordInDrive.invoke(nAudio.metadata);
      return resultDelete;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateNameAudio(ctx) {
    const nName = ctx.request.body.name;
    const _id = ctx.request.body._id;
    try {
      const result = await this.dUpdateNameAudioRecord.invoke(_id, nName);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AppController;
