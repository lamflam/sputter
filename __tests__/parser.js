const sputter = require("../sputter");

describe("basic query parsing", () => {
  test("empty query", () => {
    expect(sputter.parse("")).toBeUndefined();
    expect(sputter.parse("      ")).toBeUndefined();
  });

  test("leading/trailing whitespace", () => {
    expect(sputter.parse(" A")).not.toBeUndefined();
    expect(sputter.parse("     A")).not.toBeUndefined();
    expect(sputter.parse("A ")).not.toBeUndefined();
    expect(sputter.parse("A     ")).not.toBeUndefined();
    expect(sputter.parse(" A ")).not.toBeUndefined();
    expect(sputter.parse("     A     ")).not.toBeUndefined();
  });
});
