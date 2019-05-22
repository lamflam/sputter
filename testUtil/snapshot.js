const sputter = require("../sputter");
const { parse } = require("@babel/parser");
const { codeFrameColumns } = require("@babel/code-frame");
const { wrap } = require("jest-snapshot-serializer-raw");

module.exports = function snapshot(code, selector) {
  test(selector, () => {
    const ast = parse(code);
    const matches = sputter(ast, selector);

    const frames = matches.map((node) => {
      const codeFrame = codeFrameColumns(
        code,
        {
          start: {
            line: node.loc.start.line,
            column: node.loc.start.column + 1,
          },
          end: {
            line: node.loc.end.line,
            column: node.loc.end.column + 1,
          },
        },
        {
          message: node.type,
        }
      );
      return codeFrame;
    });
    expect(wrap(frames.join("\n"))).toMatchSnapshot();
  });
};
