const sputter = require("..");

describe("non-JS AST", () => {
  test("js-like", () => {
    const ast = {
      type: "Foo",
      children: [{ type: "Bar", value: 4 }],
    };

    const query = sputter.query(ast, "Foo > Bar");
    expect(query).toEqual([ast.children[0]]);
  });

  test("alternate type key", () => {
    const sputter2 = sputter.configure({
      identifierKey: "kind",
    });

    const ast = {
      kind: "Foo",
      children: [{ kind: "Bar", value: 4 }],
    };

    const query = sputter2.query(ast, "Foo > Bar");
    expect(query).toEqual([ast.children[0]]);
  });
});
