const Koa = require("koa");
const json = require("koa-json");
const KoaRouter = require("koa-router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const Logger = require("koa-logger");


class ApplicationProvider {
  register(ioc, namespace) {
    ioc.singleton(namespace, () => {
      const app = new Koa();
      app.use(cors());
      app.use(json());
      app.use(new Logger());
      app.use(bodyParser());
      const router = new KoaRouter();
      app.use(router.routes()).use(router.allowedMethods());
      return { app, router };
    });
  }
}

module.exports = ApplicationProvider;
