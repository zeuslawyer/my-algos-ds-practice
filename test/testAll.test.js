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
    expect(ALL.binary.binarySearchIteration(1, arr)).to.equal(-1);
    expect(ALL.binary.binarySearchIteration(1, arr)).to.equal(-1);
  });

  it('test the pipe function', () => {
    const one = arg => arg + ' ONE';
    const two = arg => arg + ' TWO';
    const three = arg => arg + ' THREE';
    const four = arg => arg + ' FOUR';
    const output = ALL.pipecompose.pipe(
      one,
      two,
      three,
      four
    )('Testing...');

    expect(output).to.equal('Testing... ONE TWO THREE FOUR');
  });
  it('test the compose function', () => {
    const one = arg => arg + ' ONE';
    const two = arg => arg + ' TWO';
    const three = arg => arg + ' THREE';
    const four = arg => arg + ' FOUR';
    const output = ALL.pipecompose.compose(
      one,
      two,
      three,
      four
    )('Testing...');

    expect(output).to.equal('Testing... FOUR THREE TWO ONE');
  });

  it('should match a substring', () => {
    let str = 'abracadabra';
    let substr = 'cada';
    let substr2 = 'nothing';
    let substr3 = 'ab';

    expect(ALL.substringMatcher(str, substr)).to.equal(1);
    expect(ALL.substringMatcher(str, substr2)).to.equal(0);
    expect(ALL.substringMatcher(str, substr3)).to.equal(2);
  });

  it('bubble sort 2X for loops', () => {
    const arr = [3, 55, 43, 22, 16, -4, 33, 9];
    const arr2 = [9, 1, 2, 3, 4, 5, 6, 7, 8];
    const sorted = arr.sort((a, b) => a - b);

    expect(ALL.bubble.bubbleSort(arr)).to.equal(sorted);
    expect(ALL.bubble.bubbleSort(arr2)).to.equal(arr2.sort((a, b) => a - b));
  });

  it('bubble sort with while loop', () => {
    const arr = [3, 55, 43, 22, 16, -4, 33, 9];
    const arr2 = [9, 1, 2, 3, 4, 5, 6, 7, 8];
    const sorted = arr.sort((a, b) => a - b);

    expect(ALL.bubble.bubbleSort2(arr)).to.equal(sorted);
    expect(ALL.bubble.bubbleSort2(arr)).not.to.equal(arr2);
    expect(ALL.bubble.bubbleSort2(arr2)).to.equal(arr2.sort((a, b) => a - b));
  });
});
