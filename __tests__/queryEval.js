const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe(":eval", () => {
  snapshot(
    fixtures.smallProgram,
    ":eval('node.type === \"VariableDeclarator\"')"
  );

  snapshot(
    fixtures.smallProgram,
    // requires relative to process.cwd
    `:eval('node.type === require("./testUtil/variableDeclarator")')`
  );

  snapshot(
    fixtures.smallProgram,
    // require works with node modules
    `:eval('require("@babel/code-frame"), false')`
  );
});
