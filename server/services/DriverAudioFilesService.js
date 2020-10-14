const fs = require("fs");
const { promisify } = require("util");

class DriverAudioFiles {
  constructor() {
    this.writeFile = promisify(fs.writeFile);
    this.readFile = promisify(fs.readFile);
    this.deleteFile = promisify(fs.unlinkSync);
    this.messageFolder = "./public/audio/";
    if (!fs.existsSync(this.messageFolder)) {
      fs.mkdirSync(this.messageFolder);
    }
  }

  async dirUpload() {
    return this.messageFolder;
  }

  async getFile(metaName) {
    if (!metaName) {
      throw Error("Required metaName file");
    }
    try {
      const result = await this.readFile(this.messageFolder + metaName);
      return result;
    } catch (error) {
      console.error(error);
      throw Error(error);
    }
  }

  async removeFile(nameFile) {
    try {
      fs.unlinkSync(this.messageFolder + nameFile);
      return true;
    } catch (err) {
      console.error(err);
    }
  }

  async saveFile(metaName, fileBase64) {
    if (!fileBase64) {
      throw Error("Error save file, data is required");
    }
    try {
      const result = await this.writeFile(metaName, fileBase64, "base64");
      console.log("Result", result);
    } catch (error) {
      console.error(error);
      throw Error(error);
    }
    return true;
  }
}

module.exports = DriverAudioFiles;
