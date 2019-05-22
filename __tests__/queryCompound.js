const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe("Compound query", () => {
  describe("two attributes", () => {
    snapshot(fixtures.conditional, '[left.name="x"][right.value=1]');
  });

  describe("type and pseudo", () => {
    snapshot(fixtures.conditional, '[left.name="x"]:matches(*)');
  });
});
