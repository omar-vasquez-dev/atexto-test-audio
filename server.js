global.ioc = require("ioc-node")(__dirname);
const app = require("./server/app");
const staticPage = require('koa-static')
app.use(staticPage(__dirname + '/build'))

app.listen(3333, () => {
  console.info("Server started .....");
});
