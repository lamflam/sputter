const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe("Parent selector query", () => {
  describe("conditional", () => {
    snapshot(
      fixtures.conditional,
      'ExpressionStatement:has([name="foo"][type="Identifier"])'
    );
  });

  describe("one of", () => {
    snapshot(
      fixtures.conditional,
      'IfStatement:has(LogicalExpression [name="foo"], LogicalExpression [name="x"])'
    );
  });

  describe("chaining", () => {
    snapshot(
      fixtures.conditional,
      'BinaryExpression:has(Identifier[name="x"]):has(Literal[value="test"])'
    );
  });

  describe("nesting", () => {
    snapshot(
      fixtures.conditional,
      "Program:has(IfStatement:has(Literal[value=true], Literal[value=false]))"
    );
  });

  describe("non-matching", () => {
    snapshot(fixtures.conditional, ':has([value="impossible"])');
  });
});
