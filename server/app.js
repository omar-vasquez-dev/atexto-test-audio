const registerAplication = require("./kernel");
const registerServices = require("./services");
const colletionRoutes = require("./routes");
const { app, router } = registerAplication();
registerServices();
colletionRoutes(router);
module.exports = app;
