const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe("Wildcard query", () => {
  describe("empty", () => {
    snapshot(fixtures.conditional, "");
  });

  describe("conditional", () => {
    snapshot(fixtures.conditional, "*");
  });

  describe("for loop", () => {
    snapshot(fixtures.forLoop, "*");
  });

  describe("simple function", () => {
    snapshot(fixtures.simpleFunction, "*");
  });

  describe("simple program", () => {
    snapshot(fixtures.simpleProgram, "*");
  });

  describe("small program", () => {
    snapshot(fixtures.smallProgram, "*");
  });
});
