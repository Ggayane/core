module.exports = [{
  group: 'syntax',
  sources: [{
    group: 'wrong size of the indent',
    sources: [{
      title: 'error in 2nd line',
      code: 'եթե 1 < 2\n     տպել(617)',
      errorId: 'indentError',
      errorParam: {
        line: 2
      },
    }, {
      title: 'error in 3rd line',
      code: 'x = 12\nեթե 1 < 2\n     տպել(617)',
      errorId: 'indentError',
      errorParam: {
        line: 3
      },
    }]
  }, {
    title: 'Syntax error',
    code: 'տպել(1x)',
    errorId: 'syntaxError'
  }, {
    title: 'Function argument scope error',
    code: 'a = քառակուսի(5\nտպել(a)',
    errorId: 'functionArgumentSyntaxError',
    errorParam: {
      line: 1
    },
  }]
}];