import readline from 'readline'
import parser from './peg/nbt.js'

const rl = readline.createInterface(
  process.stdin,
  process.stdout
)

let input = ''

rl.on('line', (line) => {
  input += line
})

rl.on('close', () => {
  let result = parser.parse(input)
  console.log(result)
})
