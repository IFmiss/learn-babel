module.exports = function ({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        if (path.node.name !== 'a') {
          return
        }
        path.node.name = 'c'
      }
    }
  }
}
