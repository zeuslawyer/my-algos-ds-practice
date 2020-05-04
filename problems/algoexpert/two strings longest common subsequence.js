// https://leetcode.com/problems/longest-common-subsequence/

// NOTE: not optimised : - O(nm * min(n*m)) for time AND space
const { assertArrayEquals } = require('../../test/assertEquals');
function longestCommonSubsequence(str1, str2) {
  // handle empty string inputs
  if (!str1 || !str2) return [];
  str1 = ' ' + str1;
  str2 = ' ' + str2;

  // set string2 as the rows
  // let grid = new Array(str2.length).fill(new Array(str1.length).fill(''));
  const grid = Array.from(
    Array(str2.length),
    () => new Array(str1.length).fill('') // empty strings
  );

  for (let i = 1; i < str2.length; i++) {
    for (let j = 1; j < str1.length; j++) {
      // if same char, then concatenate with string built up prior to current char
      if (str2[i] === str1[j]) {
        grid[i][j] = grid[i - 1][j - 1] + str2[i];
      } else {
        // remove last char from each string, one at a time, and get the longest substring
        grid[i][j] =
          grid[i - 1][j].length > grid[i][j - 1].length
            ? grid[i - 1][j]
            : grid[i][j - 1];
      }
    }
  }
  let ans = grid[str2.length - 1][str1.length - 1];
  ans = ans.split('');
  // console.log(grid);
  return ans;
}

const case1 = { str1: 'ZXVVYZW', str2: 'XKYKZPW' }; // [x,y,z,w]
let test1 = longestCommonSubsequence(case1.str1, case1.str2);
assertArrayEquals(test1, ['X', 'Y', 'Z', 'W'], 'AlgoExpert Test Case 1: ');

const case7 = { str1: 'clement', str2: 'antoine' };
let test7 = longestCommonSubsequence(case7.str1, case7.str2);
assertArrayEquals(test7, ['n', 't'], 'AlgoExpert Test Case 7: ');

const case8 = {
  str1: '8111111111111111142',
  str2: '222222222822222222222222222222433333333332',
};
let test8 = longestCommonSubsequence(case8.str1, case8.str2);
assertArrayEquals(test8, ['8', '4', '2'], 'AlgoExpert Test Case 8');

// NOTE optimized O(NM) time and space - Solution 4

function subsequence(str1, str2) {
  if (!str1.length || !str2.length) return [];
  str1 = ' ' + str1;
  str2 = ' ' + str2;

  let grid = new Array(str2.length); // rows come from string 2
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(str1.length).fill(0); // fill with 0
  }

  // instead of storing total subsequence as string, store only lengths, which are used as indicators of where next largest subsequence is
  for (let i = 1; i < str2.length; i++) {
    for (let j = 1; j < str1.length; j++) {
      if (str2[i] === str1[j]) {
        grid[i][j] = grid[i - 1][j - 1] + 1;
      } else {
        grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]); // longest subseq excluding each of the current chars
      }
    }
  }

  return buildSequence(grid, str1);
}

// pass it string 1
function buildSequence(grid, str) {
  let row = grid.length - 1;
  let col = grid[0].length - 1;

  let res = []; // queue

  while (row !== 0 && col !== 0) {
    // check if the total length is same as one of the previous ones
    let totalLen = grid[row][col];
    if (totalLen === grid[row - 1][col]) {
      row--;
      continue;
    } else if (totalLen === grid[row][col - 1]) {
      col--;
      continue;
    } else {
      // current letter from string 2 is in the answer
      res.unshift(str[col]);
      row--;
      col--;
    }
  }

  return res;
}

test1 = subsequence(case1.str1, case1.str2);
assertArrayEquals(
  test1,
  ['X', 'Y', 'Z', 'W'],
  'AlgoExpert OPTIMISED Test Case 1: '
);

test2 = subsequence(case7.str1, case7.str2);
assertArrayEquals(test2, ['n', 't'], 'AlgoExpert OPTIMISED Test Case 7: ');

test3 = subsequence(case8.str1, case8.str2);
assertArrayEquals(test3, ['8', '4', '2'], 'AlgoExpert OPTIMISED Test Case 8: ');
