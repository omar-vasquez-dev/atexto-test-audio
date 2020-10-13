const Koa = require("koa");
const json = require("koa-json");
const KoaRouter = require("koa-router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

class ApplicationProvider {
  register(ioc, namespace) {
    ioc.singleton(namespace, () => {
      const app = new Koa();
      app.use(cors());
      app.use(json());
      app.use(bodyParser());
      const router = new KoaRouter();
      app.use(router.routes()).use(router.allowedMethods());
      app.use((ctx) => {
        ctx.body = "Audio Recorder API | version : 1.0.0";
      });
      return { app, router };
    });
  }
}

module.exports = ApplicationProvider;
