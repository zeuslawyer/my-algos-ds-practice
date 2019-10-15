const expect = require('chai').expect;

const { qsort } = require('../problems/quickSort');

describe.only('Quick Sort ', () => {
  it('should return quick sort of single array', () => {
    let arr = [1];
    expect(qsort(arr)).to.equal(arr);
  });

  it('should sort an array with -ve elements', () => {
    let arr = [3, 21, 2, 6, -2, 10];
    let res = [-2, 2, 3, 6, 10, 21];

    expect(qsort(arr)).to.eql(res);
  });

  it('should sort an array all -ve elements', () => {
    let arr = [-13, -2, -10];
    let res = [-13,-10, -2];

    expect(qsort(arr)).to.eql(res);
  });


});
