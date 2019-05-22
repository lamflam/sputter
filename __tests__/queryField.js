const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe("Field query", () => {
  describe("single field", () => {
    snapshot(fixtures.conditional, ".test");
  });

  describe("field sequence", () => {
    snapshot(fixtures.simpleProgram, ".declarations.init");
  });
});
