function ModuleAudioRecorderRoutes(router) {
  router.get(
    "/audio/file/:name",
    async (ctx) =>
      (ctx.body = await ioc
        .use("Apps/AudioRecorder/Controller/AppController")
        .getAudioRecord(ctx))
  );

  router.get(
    "/audio/all",
    async (ctx) =>
      (ctx.body = await ioc
        .use("Apps/AudioRecorder/Controller/AppController")
        .getAllRecorders(ctx))
  );

  router.post(
    "/audio/create",
    async (ctx) =>
      (ctx.body = await ioc
        .use("Apps/AudioRecorder/Controller/AppController")
        .createAudioRecorder(ctx))
  );
}

module.exports = ModuleAudioRecorderRoutes;
