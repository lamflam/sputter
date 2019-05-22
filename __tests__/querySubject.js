const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe("Query subject", () => {
  describe("type subject", () => {
    snapshot(fixtures.conditional, "!IfStatement Identifier");
  });

  describe("* subject", () => {
    snapshot(fixtures.forLoop, '!* > [name="foo"]');
  });

  describe(":nth-child subject", () => {
    snapshot(fixtures.simpleFunction, '!:nth-child(1) [name="y"]');
  });

  describe(":nth-last-child subject", () => {
    snapshot(fixtures.simpleProgram, '!:nth-last-child(1) [name="y"]');
  });

  describe("attribute literal subject", () => {
    snapshot(fixtures.simpleProgram, '![test] [name="y"]');
  });

  describe("attribute type subject", () => {
    snapshot(
      fixtures.nestedFunctions,
      "![generator=type(boolean)] > BlockStatement"
    );
  });

  describe("attribute regexp subject", () => {
    snapshot(fixtures.conditional, '![operator=/=+/] > [name="x"]');
  });

  describe("field subject", () => {
    snapshot(fixtures.forLoop, "!.test");
  });

  describe(":matches subject", () => {
    snapshot(fixtures.forLoop, '!:matches(*) > [name="foo"]');
  });

  describe(":not subject", () => {
    snapshot(fixtures.nestedFunctions, '!:not(BlockStatement) > [name="foo"]');
  });

  describe("compound attributes subject", () => {
    snapshot(fixtures.conditional, '![left.name="x"][right.value=1]');
  });

  describe("decendent right subject", () => {
    snapshot(fixtures.forLoop, "* !AssignmentExpression");
  });

  describe("child right subject", () => {
    snapshot(fixtures.forLoop, "* > !AssignmentExpression");
  });

  describe("sibling left subject", () => {
    snapshot(fixtures.simpleProgram, "!VariableDeclaration ~ IfStatement");
  });

  describe("sibling right subject", () => {
    snapshot(fixtures.simpleProgram, "!VariableDeclaration ~ !IfStatement");
  });

  describe("adjacent right subject", () => {
    snapshot(
      fixtures.simpleProgram,
      "!VariableDeclaration + !ExpressionStatement"
    );
  });

  describe("multiple adjacent siblings", () => {
    snapshot(fixtures.bigArray, "Identifier + Identifier");
  });

  describe("multiple siblings", () => {
    snapshot(fixtures.bigArray, "Identifier ~ Identifier");
  });
});
