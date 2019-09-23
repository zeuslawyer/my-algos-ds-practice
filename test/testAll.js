const expect = require('chai').expect;

const { ALL } = require('../index');

describe('algorithms ', () => {

  it('should log OK', () => {
    expect(ALL.test()).to.equal('OK');
  });

  it('should reverse the string', () => {
    expect(ALL.reverseString('malayalam')).to.equal('malayalam');
    expect(ALL.reverseString('rowena')).to.equal('anewor');
  });

  it('return target value using binary search recursion', () => {
    const arr = [5, 6, 7, 88, 99, 126, 201, 277, 500];
    expect(ALL.binary.binarySearchRecursion(88, arr)).to.equal(3);
    expect(ALL.binary.binarySearchRecursion(1000, arr)).to.equal(-1);
    expect(ALL.binary.binarySearchRecursion(1, arr)).to.equal(-1);
    expect(ALL.binary.binarySearchRecursion(1, arr, 20, 14)).to.equal(-1);
  });

  it('runs binary search using a while loop', () => {
    const arr = [5, 6, 7, 88, 99, 126, 201, 277, 500];
    expect(ALL.binary.binarySearchIteration(126, arr)).to.equal(5);
    expect(ALL.binary.binarySearchIteration(88, arr)).to.equal(3);
    expect(ALL.binary.binarySearchIteration(1000, arr)).to.equal(-1);
    expect(
      ALL.binary.binarySearchIteration(1, arr)
    ).to.equal(-1);
    expect(
      ALL.binary.binarySearchIteration(1, arr)
    ).to.equal(-1);
  });
});
