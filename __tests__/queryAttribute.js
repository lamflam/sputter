const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe("Attribute query", () => {
  describe("conditional", () => {
    snapshot(fixtures.conditional, '[name="x"]');
    snapshot(fixtures.conditional, '[callee.name="foo"]');
    snapshot(fixtures.conditional, "[operator]");
    snapshot(fixtures.conditional, "[prefix=true]");
  });

  describe("for loop", () => {
    snapshot(fixtures.forLoop, '[operator="="]');
    snapshot(fixtures.forLoop, '[object.name="foo"]');
    snapshot(fixtures.forLoop, "[operator]");
  });

  describe("simple function", () => {
    snapshot(fixtures.simpleFunction, '[kind="var"]');
    snapshot(fixtures.simpleFunction, '[id.name="foo"]');
    snapshot(fixtures.simpleFunction, "[left]");
  });

  describe("simple program", () => {
    snapshot(fixtures.simpleProgram, '[kind="var"]');
    snapshot(fixtures.simpleProgram, '[id.name="y"]');
    snapshot(fixtures.simpleProgram, "[body]");
  });

  describe("conditional regexp", () => {
    snapshot(fixtures.conditional, "[name=/x|foo/]");
  });

  describe("simple function regexp", () => {
    snapshot(fixtures.simpleFunction, "[name=/x|foo/]");
  });

  describe("simple function numeric", () => {
    snapshot(fixtures.simpleFunction, "FunctionDeclaration[params.0.name=x]");
  });

  describe("simple program regexp", () => {
    snapshot(fixtures.simpleProgram, "[name=/[asdfy]/]");
  });

  describe("for loop regexp", () => {
    snapshot(fixtures.forLoop, "[name=/i|foo/]");
  });

  describe("nonexistent attribute regexp", () => {
    snapshot(fixtures.conditional, "[foobar=/./]");
  });

  describe("not string", () => {
    snapshot(fixtures.conditional, '[name!="x"]');
  });

  describe("not type", () => {
    snapshot(fixtures.conditional, "[value!=type(number)]");
  });

  describe("not regexp", () => {
    snapshot(fixtures.conditional, "[name!=/x|y/]");
  });

  describe("less than", () => {
    snapshot(fixtures.conditional, "[body.length<2]");
  });

  describe("greater than", () => {
    snapshot(fixtures.conditional, "[body.length>1]");
  });

  describe("less than or equal", () => {
    snapshot(fixtures.conditional, "[body.length<=2]");
  });

  describe("greater than or equal", () => {
    snapshot(fixtures.conditional, "[body.length>=1]");
  });

  describe("attribute type", () => {
    snapshot(fixtures.conditional, "[test=type(object)]");
    snapshot(fixtures.conditional, "[value=type(boolean)]");
  });
});
