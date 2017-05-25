// import Peg from 'pegjs'
// import NbtGrammer from './nbt.pegjs'

// const Parser = peg.generate(NbtGrammer)

import Parser from './nbt.js'

/*  Tracer event example:
 *  { type: 'rule.enter', // or 'rule.match' or 'rule.fail'
 *    rule: 'start',
 *    location:
 *    { start: { offset: 0, line: 1, column: 1 },
 *      end: { offset: 0, line: 1, column: 1 } } }
 */

let input = '2.0d'
let result = Parser.parse(input)
console.log(result)
