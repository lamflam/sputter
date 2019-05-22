const esquery = require("..");

describe("basic query parsing", () => {
  test("empty query", () => {
    expect(esquery.parse("")).toBeUndefined();
    expect(esquery.parse("      ")).toBeUndefined();
  });

  test("leading/trailing whitespace", () => {
    expect(esquery.parse(" A")).not.toBeUndefined();
    expect(esquery.parse("     A")).not.toBeUndefined();
    expect(esquery.parse("A ")).not.toBeUndefined();
    expect(esquery.parse("A     ")).not.toBeUndefined();
    expect(esquery.parse(" A ")).not.toBeUndefined();
    expect(esquery.parse("     A     ")).not.toBeUndefined();
  });
});
