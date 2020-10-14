const AudioRecorderController = require("./Controllers/AppController");
const GetAllAudioRecords = require("./Domains/GetAllAudioRecords");
const CreateAudioRecorder = require("./Domains/CreateAudioRecorder");
const UploadAudioRecorder = require("./Domains/UploadAudioRecorder");
const AudioRecorderRepository = require("./Repositories/AudioRecorderRepository");
const GetAudioRecordInDrive = require("./Domains/GetAudioRecordInDrive");
const DeleteAudioRecord = require("./Domains/DeleteAudioRecord");
const RemoveAudioRecordInDrive = require("./Domains/RemoveAudioRecordInDrive");
const GetAudioRecord = require("./Domains/GetAudioRecord");
const UpdateNameAudioRecord = require("./Domains/UpdateNameAudioRecord");

class ServiceProviderAudioRecorder {
  register(ioc, namespace) {
    ioc.bind(`${namespace}/Data/AudioModel`, () => new GetAllAudioRecords());
    ioc.bind(
      `${namespace}/Domains/UploadAudioRecorder`,
      () => new UploadAudioRecorder()
    );
    ioc.bind(
      `${namespace}/Domains/UpdateNameAudioRecord`,
      () => new UpdateNameAudioRecord()
    );

    ioc.bind(`${namespace}/Domains/GetAudioRecord`, () => new GetAudioRecord());
    ioc.bind(
      `${namespace}/Domains/DeleteAudioRecord`,
      () => new DeleteAudioRecord()
    );
    ioc.bind(
      `${namespace}/Domains/RemoveAudioRecordInDrive`,
      () => new RemoveAudioRecordInDrive()
    );
    ioc.bind(
      `${namespace}/Domains/GetAudioRecordInDrive`,
      () => new GetAudioRecordInDrive()
    );
    ioc.bind(
      `${namespace}/Domains/GetAllAudioRecords`,
      () => new GetAllAudioRecords()
    );
    ioc.bind(
      `${namespace}/Domains/CreateAudioRecorder`,
      () => new CreateAudioRecorder()
    );
    ioc.bind(
      `${namespace}/Repositories/AudioRecorderRepository`,
      () => new AudioRecorderRepository()
    );
    ioc.singleton(
      `${namespace}/Controller/AppController`,
      () => new AudioRecorderController()
    );
  }
}

module.exports = ServiceProviderAudioRecorder;
