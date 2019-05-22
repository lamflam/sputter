const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe("Matches query", () => {
  describe("conditional matches", () => {
    snapshot(fixtures.conditional, ":matches(IfStatement)");
  });

  describe("for loop matches", () => {
    snapshot(fixtures.forLoop, ":matches(BinaryExpression, MemberExpression)");
  });

  describe("simple function matches", () => {
    snapshot(
      fixtures.simpleFunction,
      ':matches([name="foo"], ReturnStatement)'
    );
  });

  describe("simple program matches", () => {
    snapshot(
      fixtures.simpleProgram,
      ":matches(AssignmentExpression, BinaryExpression)"
    );
  });

  describe("implicit matches", () => {
    snapshot(
      fixtures.simpleProgram,
      "AssignmentExpression, BinaryExpression, NonExistant"
    );
  });
});
