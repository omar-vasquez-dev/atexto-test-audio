function ModuleAudioRecorderRoutes(router) {
  router.get("/api",(ctx) => {
    ctx.body = "Audio Recorder API | version : 1.0.0";
  });
  
  router.get(
    "/audio/file/:name",
    async (ctx) =>
      (ctx.body = await global.ioc
        .use("Apps/AudioRecorder/Controller/AppController")
        .getAudioRecord(ctx))
  );

  router.get(
    "/audio/all",
    async (ctx) =>
      (ctx.body = await global.ioc
        .use("Apps/AudioRecorder/Controller/AppController")
        .getAllRecorders(ctx))
  );

  router.post(
    "/audio/create",
    async (ctx) =>
      (ctx.body = await global.ioc
        .use("Apps/AudioRecorder/Controller/AppController")
        .createAudioRecorder(ctx))
  );

  router.post(
    "/audio/delete",
    async (ctx) =>
      (ctx.body = await global.ioc
        .use("Apps/AudioRecorder/Controller/AppController")
        .deleteAudioRecord(ctx))
  );

  router.post(
    "/audio/update_name",
    async (ctx) =>
      (ctx.body = await global.ioc
        .use("Apps/AudioRecorder/Controller/AppController")
        .updateNameAudio(ctx))
  );
}

module.exports = ModuleAudioRecorderRoutes;
