const moduleAudioRecoderRoutes = require("./module_audiorecorder_routes.js");

function routerCollections(router) {
  moduleAudioRecoderRoutes(router);
}

module.exports = routerCollections;
