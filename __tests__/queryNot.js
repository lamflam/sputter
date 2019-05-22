const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe("Not query", () => {
  describe("conditional", () => {
    snapshot(fixtures.conditional, ":not(Literal)");
  });

  describe("for loop", () => {
    snapshot(fixtures.forLoop, ':not([name="x"])');
  });

  describe("simple function", () => {
    snapshot(fixtures.simpleFunction, ":not(*)");
  });

  describe("simple program", () => {
    snapshot(fixtures.simpleProgram, ":not(Identifier, IfStatement)");
  });

  describe("small program", () => {
    snapshot(fixtures.smallProgram, ":not([value=1])");
  });
});
