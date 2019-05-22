const snapshot = require("../testUtil/snapshot");
const fixtures = require("../testUtil/fixtures");

describe("Class query", () => {
  describe(":statement", () => {
    snapshot(fixtures.allClasses, ":statement");
  });

  describe(":expression", () => {
    snapshot(fixtures.allClasses, ":Expression");
  });

  describe(":function", () => {
    snapshot(fixtures.allClasses, ":FUNCTION");
  });

  describe(":declaration", () => {
    snapshot(fixtures.allClasses, ":declaratioN");
  });

  describe(":pattern", () => {
    snapshot(fixtures.allClasses, ":paTTern");
  });
});
