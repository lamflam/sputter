const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe("Descendant query", () => {
  describe("conditional matches", () => {
    snapshot(fixtures.conditional, "Program IfStatement");
  });

  describe("#8: descendant selector includes ancestor in search", () => {
    snapshot(fixtures.conditional, "Identifier[name=x]");
    snapshot(fixtures.conditional, "Identifier [name=x]");
    snapshot(fixtures.conditional, "BinaryExpression [name=x]");
    snapshot(fixtures.conditional, "AssignmentExpression [name=x]");
  });
});
