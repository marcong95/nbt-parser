'use strict';

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

var _nbt = require('./peg/nbt.js');

var _nbt2 = _interopRequireDefault(_nbt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rl = _readline2.default.createInterface(process.stdin, process.stdout);

var input = '';

rl.on('line', function (line) {
  input += line;
});

rl.on('close', function () {
  var result = _nbt2.default.parse(input);
  console.log(result);
});
