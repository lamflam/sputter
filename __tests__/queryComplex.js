const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe("Complex selector query", () => {
  describe("two types child", () => {
    snapshot(fixtures.conditional, "IfStatement > BinaryExpression");
  });

  describe("three types child", () => {
    snapshot(
      fixtures.conditional,
      "IfStatement > BinaryExpression > Identifier"
    );
  });

  describe("two types descendant", () => {
    snapshot(fixtures.conditional, "IfStatement BinaryExpression");
  });

  describe("two types sibling", () => {
    snapshot(fixtures.simpleProgram, "VariableDeclaration ~ IfStatement");
  });

  describe("two types adjacent", () => {
    snapshot(
      fixtures.simpleProgram,
      "VariableDeclaration + ExpressionStatement"
    );
  });
});
