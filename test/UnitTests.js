/*import {increaseByOne, sum} from '../src/TestFunctions';*/

const increaseByOne = require('../src/TestFunctions');
const sum = require('../src/TestFunctions');
const expect = chai.expect;

describe('calculation', () => {
  it('calculates the sum of two integers correctly', () => {
    expect(sum({a: 0}, {b: 1})).to.eql({
      c: 1
    });
    expect(sum({a: 6}, {b: 7})).to.eql({
      c: 13
    });
    expect(sum({a: 0}, {b: 0})).to.eql({
      c: 0
    });
  });
  it('increases the integer by one with syntax "++"', () => {
    expect(increaseByOne({a: 0})).to.eql({
      b: 1
    });
    expect(increaseByOne({a: 2})).to.eql({
      b: 3
    });
  });
});