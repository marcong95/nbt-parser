import parser from '../peg/nbt'
import {expect} from 'chai'

describe('Test on individual data type', () => {
  it('Byte', function() {
    expect(parser.parse('2b')).to.be.deep.equal({
      type: 'byte', value: 2
    })
  })
  it('Short', function() {
    expect(parser.parse('3s')).to.be.deep.equal({
      type: 'short', value: 3
    })
  })
  it('Integer', function() {
    expect(parser.parse('5')).to.be.deep.equal({
      type: 'int', value: 5
    })
  })
  it('Long', function() {
    expect(parser.parse('8L')).to.be.deep.equal({
      type: 'long', value: 8
    })
  })
  it('Float', function() {
    expect(parser.parse('2.33f')).to.be.deep.equal({
      type: 'float', value: 2.33
    })
  })
  it('Double', function() {
    expect(parser.parse('3.141592653589793')).to.be.deep.equal({
      type: 'double', value: 3.141592653589793
    })
  })
})
