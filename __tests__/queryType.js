const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe("Type query", () => {
  describe("conditional", () => {
    snapshot(fixtures.conditional, "Program");
    snapshot(fixtures.conditional, "IfStatement");
    snapshot(fixtures.conditional, "LogicalExpression");
    snapshot(fixtures.conditional, "ExpressionStatement");
  });

  describe("for loop", () => {
    snapshot(fixtures.forLoop, "Program");
    snapshot(fixtures.forLoop, "ForStatement");
    snapshot(fixtures.forLoop, "BinaryExpression");
  });

  describe("simple function", () => {
    snapshot(fixtures.simpleFunction, "Program");
    snapshot(fixtures.simpleFunction, "VariableDeclaration");
    snapshot(fixtures.simpleFunction, "FunctionDeclaration");
    snapshot(fixtures.simpleFunction, "ReturnStatement");
  });

  describe("simple program", () => {
    snapshot(fixtures.simpleProgram, "Program");
    snapshot(fixtures.simpleProgram, "VariableDeclaration");
    snapshot(fixtures.simpleProgram, "AssignmentExpression");
    snapshot(fixtures.simpleProgram, "Identifier");
  });

  describe("# type", () => {
    snapshot(fixtures.forLoop, "#Program");
    snapshot(fixtures.forLoop, "#ForStatement");
    snapshot(fixtures.forLoop, "#BinaryExpression");
  });

  describe("case insensitive type", () => {
    snapshot(fixtures.forLoop, "Program");
    snapshot(fixtures.forLoop, "forStatement");
    snapshot(fixtures.forLoop, "binaryexpression");
  });
});
