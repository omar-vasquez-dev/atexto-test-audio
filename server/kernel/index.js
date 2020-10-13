const AplicationProvider = require("./Aplication");

function registerProviders() {
  ioc.consume("Kernel/Aplication", AplicationProvider);
  return ioc.use("Kernel/Aplication");
}

module.exports = registerProviders;
