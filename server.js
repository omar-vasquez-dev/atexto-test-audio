global.ioc = require("ioc-node")(__dirname);
const app = require("./server/app");

//console.log(global.ioc._container);

app.listen(3333, () => {
  console.info("Server started .....");
});
