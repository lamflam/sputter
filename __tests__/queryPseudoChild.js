const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe("Pseudo *-child query", () => {
  describe("conditional first child", () => {
    snapshot(fixtures.conditional, ":first-child");
  });

  describe("conditional last child", () => {
    snapshot(fixtures.conditional, ":last-child");
  });

  describe("conditional nth child", () => {
    snapshot(fixtures.conditional, ":nth-child(2)");
    snapshot(fixtures.conditional, ":nth-last-child(2)");
  });

  describe("for loop first child", () => {
    snapshot(fixtures.forLoop, ":first-child");
  });

  describe("for loop last child", () => {
    snapshot(fixtures.forLoop, ":last-child");
  });

  describe("for loop nth child", () => {
    snapshot(fixtures.forLoop, ":nth-last-child(1)");
  });

  describe("simple function first child", () => {
    snapshot(fixtures.simpleFunction, ":first-child");
  });

  describe("simple function last child", () => {
    snapshot(fixtures.simpleFunction, ":last-child");
  });

  describe("simple function nth child", () => {
    snapshot(fixtures.simpleFunction, ":nth-child(2)");
    snapshot(fixtures.simpleFunction, ":nth-child(3)");
    snapshot(fixtures.simpleFunction, ":nth-last-child(2)");
  });

  describe("simple program first child", () => {
    snapshot(fixtures.simpleProgram, ":first-child");
  });

  describe("simple program last child", () => {
    snapshot(fixtures.simpleProgram, ":last-child");
  });

  describe("simple program nth child", () => {
    snapshot(fixtures.simpleProgram, ":nth-child(2)");
    snapshot(fixtures.simpleProgram, ":nth-child(3)");
    snapshot(fixtures.simpleProgram, ":nth-last-child(2)");
  });
});
