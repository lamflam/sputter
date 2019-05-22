const makeModuleEnv = require("make-module-env");
const vm = require("vm");
const path = require("path");

module.exports = function defaultEvalString(node, codeString) {
  const env = makeModuleEnv(path.join(process.cwd(), "sputter-eval.js"));

  return vm.runInNewContext(codeString, { require: env.require, node: node });
};
