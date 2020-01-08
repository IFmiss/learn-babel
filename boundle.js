"use strict";

var babel = require("@babel/core"); // import { transform } from "@babel/core";
// import * as babel from "@babel/core";


var code = "function () {\n  return 1 + 1\n}";
var result = babel.transformSync("code();", {});
console.log(result); // https://astexplorer.net/
