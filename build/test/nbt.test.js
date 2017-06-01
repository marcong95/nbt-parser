'use strict';

var _nbt = require('../peg/nbt');

var _nbt2 = _interopRequireDefault(_nbt);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Test on individual data type', function () {
  it('Byte', function () {
    (0, _chai.expect)(_nbt2.default.parse('2b')).to.be.deep.equal({
      type: 'byte', value: 2
    });
  });
  it('Short', function () {
    (0, _chai.expect)(_nbt2.default.parse('3s')).to.be.deep.equal({
      type: 'short', value: 3
    });
  });
  it('Integer', function () {
    (0, _chai.expect)(_nbt2.default.parse('5')).to.be.deep.equal({
      type: 'int', value: 5
    });
  });
  it('Long', function () {
    (0, _chai.expect)(_nbt2.default.parse('8L')).to.be.deep.equal({
      type: 'long', value: 8
    });
  });
  it('Float', function () {
    (0, _chai.expect)(_nbt2.default.parse('2.33f')).to.be.deep.equal({
      type: 'float', value: 2.33
    });
  });
  it('Double', function () {
    (0, _chai.expect)(_nbt2.default.parse('3.141592653589793')).to.be.deep.equal({
      type: 'double', value: 3.141592653589793
    });
  });
});