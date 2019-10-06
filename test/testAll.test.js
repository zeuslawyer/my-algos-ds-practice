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

  describe('Binary Search', () => {
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
    let str = 'abra cadab ra';
    let substr = 'ab';
    let substr2 = 'nothing';
    let substr3 = 'ab';

    expect(ALL.substringMatcher(str, substr)).to.equal(2);
    expect(ALL.substringMatcher(str, substr2)).to.equal(0);
    expect(ALL.substringMatcher(str, substr3)).to.equal(2);
  });

  it('bubble sort 2X for loops', () => {
    const arr = [3, 55, 43, 22, 16, -4, 33, 9];
    const arr2 = [9, 1, 2, 3, 4, 5, 6, 7, 8];
    const sorted = arr.sort((a, b) => a - b);

    expect(ALL.bubble.bubbleSort(arr)).to.eql(sorted);
    expect(ALL.bubble.bubbleSort(arr2)).to.eql(arr2.sort((a, b) => a - b));
  });

  it('bubble sort with while loop', () => {
    const arr = [3, 55, 43, 22, 16, -4, 33, 9];
    const arr2 = [9, 1, 2, 3, 4, 5, 6, 7, 8];
    const sorted = arr.sort((a, b) => a - b);

    expect(ALL.bubble.bubbleSort2(arr)).to.eql(sorted);
    expect(ALL.bubble.bubbleSort2(arr)).not.to.eql(arr2);
    expect(ALL.bubble.bubbleSort2(arr2)).to.eql(arr2.sort((a, b) => a - b));
  });

  it('selection sorts ', () => {
    const arr = [5, 9, 3, 1, 10, 2, 13, 4, 17];
    const result = [1, 2, 3, 4, 5, 9, 10, 13, 17];

    expect(ALL.selSort(arr)).to.eql(result);
  });

  it('insertion sorts ', () => {
    const arr = [5, 19, 3, 1, 10, 2, 13, 4, 17];
    const result = [1, 2, 3, 4, 5, 10, 13, 17, 19];

    expect(ALL.selSort(arr)).to.eql(result);
  });

  it('merges two sorted arrays', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [1, 2, 3, 4, 5];
    const result1 = [1, 2, 3, 4, 5];

    // const arr3 = [1, 4, 5, 8, 13, 19, 20, 21, 26];
    const arr3 = [1, 4, 5, 8, 13, 19, 20];
    const arr4 = [3, 6, 8, 13, 15, 77];
    var tt = [1, 3, 4, 5, 6, 8, 13, 15, 19, 20, 77]; // note each elem here is > than its counter part. edge case.
    // const arr4 = [3, 6, 8, 13, 15, 77]; // note each elem here is > than its counter part. edge case.

    expect(ALL.mergeSortedArrays(arr1, arr2)).to.eql(result1);
    expect(ALL.mergeSortedArrays([3, 4, 6, 8, 11], [1, 2, 3, 5])).to.eql([
      1,
      2,
      3,
      4,
      5,
      6,
      8,
      11
    ]);

    expect(ALL.mergeSortedArrays(arr3, arr4)).to.eql(tt);
  });
});

describe('merge sort >', () => {
  it('should sort using merged sort with negative numbers', () => {
    const unsorted = [-22, -14, -9, -7];
    const sorted = [-22, -14, -9, -7];
    expect(ALL.mergeSort(unsorted)).to.eql(sorted);
  });
  it('should sort using merged sort', () => {
    const unsorted = [22, 14, 9, -7];
    const sorted = [-7, 9, 14, 22];
    expect(ALL.mergeSort(unsorted)).to.eql(sorted);
  });
});
