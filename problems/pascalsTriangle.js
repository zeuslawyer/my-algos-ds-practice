// @ts-nocheck
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

function generate(int) {
  let res = [];
  for (let i = 0; i < int; i++) {
    res[i] = []; // initialise  row
    res[i][0] = 1;
    res[i][i] = 1;

    for (let j = 1; j < i; j++) {
      // note j always less than i because col [i] is always 1, and starts at col 1 because col[0] is always set to 1
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }
  return res;
}

// console.log(generate(4));

// return a specific row when given the number of rows

const getRow = function(int, targetRow) {
  if (targetRow > int) throw new Error('target row out of bounds');

  let triangle = [];
  for (let i = 0; i <= int; i++) {
    triangle[i] = []; // initialise
    triangle[i][0] = 1;
    triangle[i][i] = 1;

    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }
  console.log('TRIANGLE', triangle);
  return triangle[targetRow];
};

console.log(getRow(3, 3));
