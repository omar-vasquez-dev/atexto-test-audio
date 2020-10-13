const AudioRecorderController = require("./Controllers/AppController");
const GetAllAudioRecords = require("./Domains/GetAllAudioRecords");
const CreateAudioRecorder = require("./Domains/CreateAudioRecorder");
const UploadAudioRecorder = require("./Domains/UploadAudioRecorder");
const AudioRecorderRepository = require("./Repositories/AudioRecorderRepository");
const GetAudioRecord = require("./Domains/GetAudioRecord");

class ServiceProviderAudioRecorder {
  register(ioc, namespace) {
    ioc.bind(`${namespace}/Data/AudioModel`, () => new GetAllAudioRecords());
    ioc.bind(
      `${namespace}/Domains/UploadAudioRecorder`,
      () => new UploadAudioRecorder()
    );
    ioc.bind(`${namespace}/Domains/GetAudioRecord`, () => new GetAudioRecord());
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
