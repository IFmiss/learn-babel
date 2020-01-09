"use strict";

// const code = `
//   function fn<T>(text: T): T {
//     return text
//   }
// `
const code = "\n  const fn = () => {\n    alert('hello babel')\n  }\n";

const parseObj = require("@babel/parser").parse(code, {// plugins: [
  //   'typescript'
  // ]
});

console.log(parseObj);
