var babel = require("@babel/core");
// import { transform } from "@babel/core";
// import * as babel from "@babel/core";

const code = `function () {
  return 1 + 1
}`

var result = babel.transformSync("code();", {});
console.log(result)

// https://astexplorer.net/