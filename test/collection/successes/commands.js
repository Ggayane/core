module.exports = [{
  group: 'commands',
  sources: [{
    group: 'etc',
    sources: [{
      title: 'empty',
    }, {
      title: '"" + 1',
      code: 'տպել("" + 1)',
      output: '1'
    }]
  }, {
    group: 'output',
    sources: [{
      title: 'output: «text»',
      code: 'տպել(«բարեւ»)',
      output: 'բարեւ'
    }, {
      title: 'output: "text"',
      code: 'տպել("բարեւ")',
      output: 'բարեւ'
    }, {
      title: 'output: \'text\'',
      code: 'տպել(\'բարեւ\')',
      output: 'բարեւ'
    }, {
      title: '2 outputs',
      code: 'տպել(«բարեւ»)\nտպել(«աշխարհ»)',
      output: 'բարեւ\nաշխարհ'
    }, {
      title: 'output: case insensitivity',
      code: 'տպել(«բարեւ»)',
      output: 'բարեւ'
    }, {
      title: 'output: number',
      code: 'տպել(666)',
      output: '666'
    }, {
      title: 'output: variable',
      code: 'X = 125\nտպել(X)',
      output: '125'
    }, {
      title: 'output: variable: case insensitivity',
      code: 'X = 125\nտպել(X)',
      output: '125'
    }, {
      group: 'quotes in quotes',
      sources: [{
        title: '\'text»\'',
        code: 'տպել(\'տեքստ»\')',
        output: 'տեքստ»'
      }, {
        title: '"text»"',
        code: 'տպել("տեքստ»")',
        output: 'տեքստ»'
      }, {
        title: '\'«text»\'',
        code: 'տպել(\'«տեքստ»\')',
        output: '«տեքստ»'
      }, {
        title: '"«text»"',
        code: 'տպել("«տեքստ»")',
        output: '«տեքստ»'
      }, {
        group: 'inner scopes',
        sources: [{
          group: '«inner scopes»',
          sources: [{
            group: 'single scope',
            sources: [{
              title: '«text_1 \'text_2»',
              code: 'տպել(«text_1 \'text_2»)',
              output: 'text_1 \'text_2'
            }, {
              title: '«text_1 "text_2»',
              code: 'տպել(«text_1 "text_2»)',
              output: 'text_1 "text_2'
            }, {
              title: '«text_1 \\»text_2»',
              code: 'տպել(«text_1 \\»text_2»)',
              output: 'text_1 »text_2'
            }, {
              title: '«text_1 \\«text_2»',
              code: 'տպել(«text_1 \\«text_2»)',
              output: 'text_1 «text_2'
            }]
          }, {
            group: 'double scope',
            sources: [{
              title: '«text_1 \'text_2\' text_3»',
              code: 'տպել(«text_1 \'text_2\' text_3»)',
              output: 'text_1 \'text_2\' text_3'
            }, {
              title: '«text_1 "text_2" text_3»',
              code: 'տպել(«text_1 "text_2" text_3»)',
              output: 'text_1 "text_2" text_3'
            }, {
              title: '«text_1 \\»text_2\\» text_3»',
              code: 'տպել(«text_1 \\»text_2\\» text_3»)',
              output: 'text_1 »text_2» text_3'
            }, {
              title: '«text_1 \\«text_2\\« text_3»',
              code: 'տպել(«text_1 \\«text_2\\« text_3»)',
              output: 'text_1 «text_2« text_3'
            }, {
              title: '«text_1 \\«text_2\\» text_3»',
              code: 'տպել(«text_1 \\«text_2\\» text_3»)',
              output: 'text_1 «text_2» text_3'
            }, {
              title: '\'text_1 «text_2» «text_3» text_3\' ',
              code: 'տպել(\'text_1 «text_2» «text_3» text_3\')',
              output: 'text_1 «text_2» «text_3» text_3'
            }, {
              title: '\'text_1 «text_2» եւ «text_3» text_3\' ',
              code: 'տպել(\'text_1 «text_2» եւ «text_3» text_3\')',
              output: 'text_1 «text_2» եւ «text_3» text_3'
            }]
          }]
        }, {
          group: '"inner scopes"',
          sources: [{
            group: 'single scope',
            sources: [{
              title: '"text_1 \'text_2"',
              code: 'տպել("text_1 \'text_2")',
              output: 'text_1 \'text_2'
            }, {
              title: '"text_1 \\"text_2"',
              code: 'տպել("text_1 \\"text_2")',
              output: 'text_1 "text_2'
            }, {
              title: '"text_1 »text_2"',
              code: 'տպել("text_1 »text_2")',
              output: 'text_1 »text_2'
            }, {
              title: '"text_1 «text_2"',
              code: 'տպել("text_1 «text_2")',
              output: 'text_1 «text_2'
            }]
          }, {
            group: 'double scope',
            sources: [{
              title: '"text_1 \'text_2\' text_3"',
              code: 'տպել("text_1 \'text_2\' text_3")',
              output: 'text_1 \'text_2\' text_3'
            }, {
              title: '"text_1 \\"text_2\\" text_3"',
              code: 'տպել("text_1 \\"text_2\\" text_3")',
              output: 'text_1 "text_2" text_3'
            }, {
              title: '"text_1 »text_2» text_3"',
              code: 'տպել("text_1 »text_2» text_3")',
              output: 'text_1 »text_2» text_3'
            }, {
              title: '"text_1 «text_2« text_3"',
              code: 'տպել("text_1 «text_2« text_3")',
              output: 'text_1 «text_2« text_3'
            }, {
              title: '"text_1 «text_2» text_3"',
              code: 'տպել("text_1 «text_2» text_3")',
              output: 'text_1 «text_2» text_3'
            }]
          }]
        }, {
          group: '\'inner scopes\'',
          sources: [{
            group: 'single scope',
            sources: [{
              title: '\'text_1 \\\'text_2\'',
              code: 'տպել(\'text_1 \\\'text_2\')',
              output: 'text_1 \'text_2'
            }, {
              title: '\'text_1 "text_2\'',
              code: 'տպել(\'text_1 \\"text_2\')',
              output: 'text_1 "text_2'
            }, {
              title: '\'text_1 »text_2\'',
              code: 'տպել(\'text_1 »text_2\')',
              output: 'text_1 »text_2'
            }, {
              title: '\'text_1 «text_2\'',
              code: 'տպել(\'text_1 «text_2\')',
              output: 'text_1 «text_2'
            }]
          }, {
            group: 'double scope',
            sources: [{
              title: '\'text_1 \\\'text_2\\\' text_3\'',
              code: 'տպել(\'text_1 \\\'text_2\\\' text_3\')',
              output: 'text_1 \'text_2\' text_3'
            }, {
              title: '\'text_1 "text_2" text_3\'',
              code: 'տպել(\'text_1 "text_2" text_3\')',
              output: 'text_1 "text_2" text_3'
            }, {
              title: '\'text_1 »text_2» text_3\'',
              code: 'տպել(\'text_1 »text_2» text_3\')',
              output: 'text_1 »text_2» text_3'
            }, {
              title: '\'text_1 «text_2« text_3\'',
              code: 'տպել(\'text_1 «text_2« text_3\')',
              output: 'text_1 «text_2« text_3'
            }, {
              title: '\'text_1 «text_2» text_3\'',
              code: 'տպել(\'text_1 «text_2» text_3\')',
              output: 'text_1 «text_2» text_3'
            }]
          }]
        }]
      }]
    }]
  }, {
    group: 'input',
    sources: [{
      title: 'variable',
      code: 'գրել(X)',
      inputs: [617]
    }, {
      title: '2 variables',
      code: 'գրել(X)\nգրել(Y)',
      inputs: [617, 2]
    }, {
      title: 'text input',
      code: 'գրել(անուն)',
      inputs: ["Ջոն"]
    }]
  }, {
    group: 'output; input',
    sources: [{
      title: 'variable',
      code: 'գրել(X)\nտպել(X)',
      inputs: [617],
      output: '617'
    }, {
      title: '2 variables',
      code: 'գրել(X)\nգրել(Y)\nտպել(X * Y)',
      inputs: [617, 2],
      output: '1234'
    }]
  }, {
    group: 'output; operations',
    sources: [{
      group: 'numbers',
      sources: [{
        group: 'types',
        sources: [{
          title: '*',
          code: 'տպել(617 * 2)',
          output: '1234'
        }, {
          title: '/',
          code: 'տպել(1234 / 2)',
          output: '617'
        }, {
          title: '+',
          code: 'տպել(617 + 617)',
          output: '1234'
        }, {
          title: '-',
          code: 'տպել(1234 - 617)',
          output: '617'
        }]
      }, {
        title: 'output: multiple operations',
        code: 'տպել(1 + 2 * 3 - 4)',
        output: '3'
      }, {
        title: 'output: multiple operations; scopes',
        code: 'տպել((1 + 2) * (3 - 4))',
        output: '-3'
      }]
    }, {
      title: 'texts',
      code: 'տպել(«lambs: » + "empty")',
      output: 'lambs: empty'
    }, {
      title: 'variables',
      code: 'Y = 2\nX = 617\nտպել(Y * X)',
      output: '1234'
    }, {
      title: 'number and text',
      code: 'տպել(«lambs: » + 617)',
      output: 'lambs: 617'
    }, {
      title: 'variable and text',
      code: 'X = 617\nտպել(«lambs: » + X)',
      output: 'lambs: 617'
    }, {
      title: 'variable and number',
      code: 'X = 617\nտպել(2 * X)',
      output: '1234'
    }]
  }, {
    group: 'comments',
    sources: [{
      title: 'comments: single',
      code: '# comment comment comment'
    }, {
      title: 'comments: double',
      code: '# comment\n# comment'
    }, {
      title: 'comments: multiple',
      code: '# comment\n# comment\n# comment'
    }]
  }, {
    group: 'output; comments',
    sources: [{
      title: 'comment in new line and output',
      code: '# comment\nտպել(123)',
      output: '123'
    }, {
      title: 'comment in the same line with output',
      code: 'տպել(123) # 123',
      output: '123'
    }, {
      title: '2 outputs which first was commented',
      code: '# տպել(123\nտպել(321)',
      output: '321'
    }]
  }, {
    group: 'conditions',
    sources: [{
      title: 'if: with tail',
      code: 'եթե 4 > 2 ապա\n    տպել(«4 > 2»)',
      output: '4 > 2'
    }, {
      title: 'if: without tail',
      code: 'եթե 4 > 2\n    տպել(«4 > 2»)',
      output: '4 > 2'
    }, {
      title: 'if: wrong result',
      code: 'եթե 4 > 6\n    տպել(«4 > 6»)'
    }, {
      title: 'if: consecutive: 2',
      code: 'եթե 4 > 2\n    տպել(«a»)\nեթե 4 > 2\n    տպել(«b»)',
      output: 'a\nb'
    }, {
      title: 'if: consecutive: 3',
      code: 'եթե 4 > 2\n    տպել(«a»)\nեթե 4 > 2\n    տպել(«b»)\nեթե 4 > 2\n    տպել(«c»)',
      output: 'a\nb\nc'
    }, {
      title: 'if: content: consecutive: 2',
      code: 'եթե 4 > 2\n    տպել(«a»)\n    տպել(«b»)',
      output: 'a\nb'
    }, {
      title: 'if: content: consecutive: 3',
      code: 'եթե 4 > 2\n    տպել(«a»)\n    տպել(«b»)\n    տպել(«c»)',
      output: 'a\nb\nc'
    }, {
      title: 'if-else: right answer',
      code: 'եթե 4 > 2\n    տպել(«4 > 2»)\nայլապես\n    տպել(«2 >= 4»)',
      output: '4 > 2'
    }, {
      title: 'if-else: wrong answer',
      code: 'եթե 4 > 6\n    տպել(«4 > 6»)\nայլապես\n    տպել(«6 >= 4»)',
      output: '6 >= 4'
    }, {
      group: 'else-if-else',
      sources: [{
        title: 'true: 1st condition',
        code: 'եթե 4 > 2\n    տպել(«4 > 2»)\nայլապես եթե 4 > 6\n    տպել(«4 > 6»)\nայլապես\n    տպել(«4 == 4»)',
        output: '4 > 2'
      }, {
        title: 'true: 2st condition',
        code: 'եթե 4 > 6\n    տպել(«4 > 6»)\nայլապես եթե 4 > 2\n    տպել(«4 > 2»)\nայլապես\n    տպել(«4 == 4»)',
        output: '4 > 2'
      }, {
        title: 'true: 3st condition',
        code: 'եթե 4 > 6\n    տպել(«4 > 6»)\nայլապես եթե 4 == 2\n    տպել(«4 == 4»)\nայլապես\n    տպել(«4 > 2»)',
        output: '4 > 2'
      }]
    }, {
      group: 'recursively: 1 level: if',
      sources: [{
        title: 'if (true): if (true): output',
        code: 'եթե 4 > 2\n    եթե 4 > 2\n    տպել("xD")',
        output: 'xD'
      }, {
        title: 'if (true): output, if (true): output',
        code: 'եթե 4 > 2\n    տպել("a")\n    եթե 4 > 2\n        տպել("b")',
        output: 'a\nb'
      }, {
        title: 'if (true): output, if (false): output',
        code: 'եթե 4 > 2\n    տպել("a")\n    եթե 4 < 2\n        տպել("b")',
        output: 'a'
      }, {
        title: 'if (true): if (false): output',
        code: 'եթե 4 > 2\n    եթե 4 < 2\n        տպել("xD")'
      }, {
        title: 'if (false): if (true): output',
        code: 'եթե 4 < 2\n    եթե 4 > 2\n        տպել("xD")'
      }]
    }]
  }, {
    group: 'output; boolean',
    sources: [{
      group: 'operators',
      sources: [{
        group: 'condition',
        sources: [{
          title: '>',
          code: 'տպել(4 > 2)',
          output: '${true}'
        }, {
          title: '<',
          code: 'տպել(2 < 4)',
          output: '${true}'
        }, {
          title: '==',
          code: 'տպել(4 == 4)',
          output: '${true}'
        }, {
          title: '>=',
          code: 'տպել(4 >= 2)',
          output: '${true}'
        }, {
          title: '<=',
          code: 'տպել(2 <= 4)',
          output: '${true}'
        }, {
          title: '!=',
          code: 'տպել(4 != 2)',
          output: '${true}'
        }, {
          title: 'not()',
          code: 'տպել(ոչ(4 < 2))',
          output: '${true}'
        }]
      }, {
        group: 'boolean',
        sources: [{
          title: 'AND: true result',
          code: 'տպել(4 > 2 և 4 != 2)',
          output: '${true}'
        }, {
          title: 'AND: false result',
          code: 'տպել(4 > 2 և 4 == 2)',
          output: '${false}'
        }, {
          title: 'OR: true result',
          code: 'տպել(4 > 2 կամ 4 == 2)',
          output: '${true}'
        }, {
          title: 'OR: false result',
          code: 'տպել(4 < 2 կամ 4 == 2)',
          output: '${false}'
        }]
      }]
    }, {
      title: 'true value',
      code: 'տպել(ճիշտ)',
      output: '${true}'
    }, {
      title: 'false value',
      code: 'տպել(սխալ)',
      output: '${false}'
    }, {
      title: 'true condition',
      code: 'տպել(4 > 2)',
      output: '${true}'
    }, {
      title: 'false condition',
      code: 'տպել(4 < 2)',
      output: '${false}'
    }, {
      title: 'and: result: true',
      code: 'տպել(ճիշտ և ճիշտ)',
      output: '${true}'
    }, {
      title: 'and։ result: false',
      code: 'տպել(ճիշտ և սխալ)',
      output: '${false}'
    }, {
      title: 'or։ result: true',
      code: 'տպել(ճիշտ կամ սխալ)',
      output: '${true}'
    }, {
      title: 'or։ result: false',
      code: 'տպել(սխալ կամ սխալ)',
      output: '${false}'
    }, {
      title: 'mixed',
      code: 'տպել(5 < 1 և (1 < 7 կամ (1 >= 3 կամ 9 == 9)))',
      output: '${false}'
    }]
  }, {
    group: 'loops',
    sources: [{
      group: 'while-do',
      sources: [{
        title: '5 attempts',
        code: 'a = 0\nմինչ a < 5\n    տպել(a)\n    a = a + 1',
        output: '0\n1\n2\n3\n4'
      }, {
        title: '4 attempts: {if: true}',
        code: 'b = 1\nմինչ b < 4\n    եթե b == 2\n        տպել("asdasd")\n    b = b + 1',
        output: 'asdasd'
      }, {
        title: '0 attempts',
        code: 'a = 0\nմինչ a > 5\n    տպել(a)\n    a = a + 1'
      }]
    }, {
      group: 'do-while',
      sources: [{
        title: '5 attempts',
        code: 'a = 0\nկատարել\n    տպել(a)\n    a = a + 1\nմինչ a < 5',
        output: '0\n1\n2\n3\n4'
      }, {
        title: '1 attempt',
        code: 'a = 0\nկատարել\n    տպել(a)\n    a = a + 1\nմինչ a > 5',
        output: '0'
      }, {
        title: 'do-while {output; input}; do-while {output; input}; output',
        code: 'կատարել\n    տպել("Մուտքագրեք գաղտնանունը՝")\n    գրել(գաղտնանուն)\nմինչ գաղտնանուն != "root"\n\nկատարել\n    տպել("Մուտքագրեք գաղտնաբառը՝")\n    գրել(գաղտնաբառ)\nմինչ գաղտնաբառ != "toor"\n\nտպել("Դուք հաջողությամբ մուտք եք գործել ։)")',
        inputs: ['root', 'toor'],
        output: 'Մուտքագրեք գաղտնանունը՝\nՄուտքագրեք գաղտնաբառը՝\nԴուք հաջողությամբ մուտք եք գործել ։)',
      }, {
        title: 'do-while {output; input}; do-while {output; input}; output (first input error)',
        code: 'կատարել\n    տպել("Մուտքագրեք գաղտնանունը՝")\n    գրել(գաղտնանուն)\nմինչ գաղտնանուն != "root"\n\nկատարել\n    տպել("Մուտքագրեք գաղտնաբառը՝")\n    գրել(գաղտնաբառ)\nմինչ գաղտնաբառ != "toor"\n\nտպել("Դուք հաջողությամբ մուտք եք գործել ։)")',
        inputs: ['login', 'root', 'toor'],
        output: 'Մուտքագրեք գաղտնանունը՝\nՄուտքագրեք գաղտնանունը՝\nՄուտքագրեք գաղտնաբառը՝\nԴուք հաջողությամբ մուտք եք գործել ։)',
      }]
    }, {
      group: 'repeat',
      sources: [{
        title: 'repeat 0x',
        code: 'կրկնել 0 անգամ\n    տպել("a")'
      }, {
        title: 'repeat 1x',
        code: 'կրկնել 1 անգամ\n    տպել("a")',
        output: 'a'
      }, {
        title: 'repeat 5x',
        code: 'կրկնել 5 անգամ\n    տպել("a")',
        output: 'a\na\na\na\na'
      }, {
        title: 'input; repeat 2x',
        code: 'գրել(X)\nկրկնել 2 անգամ\n    տպել(X)',
        inputs: ['a'],
        output: 'a\na'
      }, {
        title: 'repeat 2x; input;',
        code: 'կրկնել 2 անգամ\n    տպել("a")\nգրել(X)\nտպել(X)',
        inputs: ['X'],
        output: 'a\na\nX'
      }, {
        title: 'repeat 2x; repeat 3x;',
        code: 'կրկնել 2 անգամ\n    տպել("a")\nկրկնել 3 անգամ\n    տպել("b")',
        output: 'a\na\nb\nb\nb'
      }, {
        title: 'repeat 2x; input',
        code: 'կրկնել 2 անգամ\n    տպել("a")\nգրել(X)',
        inputs: ['X'],
        output: 'a\na'
      }, {
        title: 'repeat 2x; input; output',
        code: 'կրկնել 2 անգամ\n    տպել("a")\nգրել(X)\nտպել(X)',
        inputs: ['X'],
        output: 'a\na\nX'
      }, {
        title: 'repeat 1x {input; output}',
        code: 'կրկնել 1 անգամ\n    գրել(N)\n    տպել(N)',
        inputs: [617],
        output: '617'
      }, {
        title: 'repeat 5x {input; output}',
        code: 'կրկնել 5 անգամ\n    գրել(N)\n    տպել(N)',
        inputs: [617, 2, 1, 2, 3],
        output: '617\n2\n1\n2\n3'
      }, {
        title: 'repeat 5x {input}',
        code: 'կրկնել 5 անգամ\n    գրել(N)',
        inputs: [617, 2, 1, 2, 3]
      }, {
        group: 'recursively: 1 level: repeat',
        sources: [{
          title: '0x1 attempts',
          code: 'կրկնել 0 անգամ\n    կրկնել 1 անգամ\n        տպել("a")'
        }, {
          title: '1x1 attempts',
          code: 'կրկնել 1 անգամ\n    կրկնել 1 անգամ\n        տպել("a")',
          output: 'a'
        }, {
          title: '1x0 attempts',
          code: 'կրկնել 1 անգամ\n    կրկնել 0 անգամ\n        տպել("a")'
        }, {
          title: '1x2 attempts',
          code: 'կրկնել 1 անգամ\n    կրկնել 2 անգամ\n        տպել("a")',
          output: 'a\na'
        }, {
          title: '2x1 attempts',
          code: 'կրկնել 2 անգամ\n    կրկնել 1 անգամ\n        տպել("a")',
          output: 'a\na'
        }, {
          title: '2x0 attempts',
          code: 'կրկնել 2 անգամ\n    կրկնել 0 անգամ\n        տպել("a")'
        }]
      }, {
        group: 'recursively: 2 level: repeat',
        sources: [{
          title: '1x1x1 attempts',
          code: 'կրկնել 1 անգամ\n    կրկնել 1 անգամ\n        կրկնել 1 անգամ\n            տպել("a")',
          output: 'a'
        }, {
          title: '1x2x3 attempts',
          code: 'կրկնել 1 անգամ\n    կրկնել 2 անգամ\n        կրկնել 3 անգամ\n            տպել("a")',
          output: 'a\na\na\na\na\na'
        }, {
          title: '3x2x1 attempts',
          code: 'կրկնել 1 անգամ\n    կրկնել 2 անգամ\n        կրկնել 3 անգամ\n            տպել("a")',
          output: 'a\na\na\na\na\na'
        }, {
          title: '3x2x1 attempts with complexity (outputs)',
          code: 'կրկնել 1 անգամ\n    տպել("X")\n    կրկնել 2 անգամ\n        տպել("Y")\n        կրկնել 3 անգամ\n            տպել("a")\nտպել("Z")',
          output: 'X\nY\na\na\na\nY\na\na\na\nZ'
        }]
      }]
    }]
  }, {
    group: 'math',
    sources: [{
      title: 'pow',
      code: 'X = 2\nY = 5\nZ = աստիճան(X,Y)\nտպել(Z)',
      output: '32'
    }, {
      title: 'sqrt',
      code: 'X = 9\nZ = արմատ(X)\nտպել(Z)',
      output: '3'
    }, {
      title: 'sqr',
      code: 'X = 9\nZ = քառակուսի(X)\nտպել(Z)',
      output: '81'
    }, {
      title: 'round',
      code: 'X = 2.5\nZ = կլորացում(X)\nտպել(Z)',
      output: '3'
    }, {
      title: 'floor',
      code: 'X = 3.5\nZ = ամբողջացնել_ներքեւ(X)\nտպել(Z)',
      output: '3'
    }, {
      title: 'log',
      code: 'X = 2\nY = 64\nZ = log(X,Y)\nտպել(Z)',
      output: '6'
    }, {
      title: 'lg',
      code: 'X = 1000\nZ = lg(X)\nտպել(Z)',
      output: '3'
    }, {
      title: 'ln',
      code: 'X = 5\nZ = ln(5)\nտպել(Z)',
      output: '1.6094379124341003'
    }, {
      title: 'ceil',
      code: 'X = 3.4\nZ = ամբողջացնել_վերեւ(X)\nտպել(Z)',
      output: '4'
    }, {
      title: 'abs',
      code: 'X = -5\nZ = մոդուլ(X)\nտպել(Z)',
      output: '5'
    }, {
      title: 'sin',
      code: 'X = 1\nZ = sin(X)\nտպել(Z)',
      output: '0.8414709848078965'
    }, {
      title: 'cos',
      code: 'X = 1\nZ = cos(X)\nտպել(Z)',
      output: '0.5403023058681398'
    }, {
      title: 'tan',
      code: 'X = 1\nZ = tan(X)\nտպել(Z)',
      output: '1.5574077246549023'
    }, {
      title: 'ctg',
      code: 'X = 1\nZ = ctg(X)\nտպել(Z)',
      output: '0.6420926159343306'
    }, {
      title: 'arcsin',
      code: 'X = 1\nZ = arcsin(X)\nտպել(Z)',
      output: '1.5707963267948966'
    }, {
      title: 'arccos',
      code: 'X = 0.5\nZ = arccos(X)\nտպել(Z)',
      output: '1.0471975511965979'
    }, {
      title: 'arctan',
      code: 'X = 1\nZ = arctan(X)\nտպել(Z)',
      output: '0.7853981633974483'
    }, {
      title: 'arcctg',
      code: 'X = 0.5\nZ = arcctg(X)\nտպել(Z)',
      output: '1.1071487177940904'
    }, {
      title: 'random: single argument',
      code: 'X = 1000\nZ = պատահականություն(X)\nտպել(Z >= 0 եւ Z <= 1000)',
      output: '${true}'
    }, {
      title: 'random: double argument',
      code: 'X = 1000\nY = 1005\nZ = պատահականություն(X,Y)\nտպել(Z >= 1000 եւ Z <= 1005)',
      output: '${true}'
    }, {
      title: 'pi',
      code: 'տպել(pi)',
      output: '3.141592653589793'
    }, {
      title: 'e',
      code: 'տպել(e)',
      output: '2.718281828459045'
    }]
  }]
}];