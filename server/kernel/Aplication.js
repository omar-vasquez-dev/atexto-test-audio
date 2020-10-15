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
      /**
       * Corns Policy
       */
      app.use(cors());
      /**
       * Json formating
       */
      app.use(json());

      /**
       * Logger Request
       */
      app.use(new Logger());

      /**
       * Format post body request.
       */
      app.use(bodyParser());

      /**
       * Router domains
       */
      const router = new KoaRouter();
      app.use(router.routes()).use(router.allowedMethods());

      /**
       * Application
       */
      return { app, router };
    });
  }
}

module.exports = ApplicationProvider;
