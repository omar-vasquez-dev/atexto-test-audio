const AppAudioRecorder = require("./../apps/Audiorecorder");
const MongooseServiceDB = require("./MongooseServiceDB");
const DriverAudioFilesService = require("./DriverAudioFilesService");

function registerAppsServices() {
  ioc.bind(
    "Service/DriverAudioFilesService",
    () => new DriverAudioFilesService()
  );
  ioc.singleton("Service/MongooseClient", () => new MongooseServiceDB());
  ioc.consume("Apps/AudioRecorder", AppAudioRecorder);
}

module.exports = registerAppsServices;
