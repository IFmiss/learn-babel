

// const code = `
//   function fn<T>(text: T): T {
//     return text
//   }
// `

const code = `
  const fn = () => {
    alert('hello babel')
  }
`

const parseObj = require("@babel/parser").parse(code, {
  // plugins: [
  //   'typescript'
  // ]
})
console.log(parseObj)