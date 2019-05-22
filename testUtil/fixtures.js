const fs = require("fs");
const path = require("path");

module.exports = {
  bigArray: fs.readFileSync(
    path.resolve(__dirname, "./fixtureFiles/bigArray.js"),
    "utf-8"
  ),
  conditional: fs.readFileSync(
    path.resolve(__dirname, "./fixtureFiles/conditional.js"),
    "utf-8"
  ),
  forLoop: fs.readFileSync(
    path.resolve(__dirname, "./fixtureFiles/forLoop.js"),
    "utf-8"
  ),
  nestedFunctions: fs.readFileSync(
    path.resolve(__dirname, "./fixtureFiles/nestedFunctions.js"),
    "utf-8"
  ),
  simpleFunction: fs.readFileSync(
    path.resolve(__dirname, "./fixtureFiles/simpleFunction.js"),
    "utf-8"
  ),
  simpleProgram: fs.readFileSync(
    path.resolve(__dirname, "./fixtureFiles/simpleProgram.js"),
    "utf-8"
  ),
  smallProgram: fs.readFileSync(
    path.resolve(__dirname, "./fixtureFiles/smallProgram.js"),
    "utf-8"
  ),
  switchStatement: fs.readFileSync(
    path.resolve(__dirname, "./fixtureFiles/switchStatement.js"),
    "utf-8"
  ),
  whileLoop: fs.readFileSync(
    path.resolve(__dirname, "./fixtureFiles/whileLoop.js"),
    "utf-8"
  ),
};
