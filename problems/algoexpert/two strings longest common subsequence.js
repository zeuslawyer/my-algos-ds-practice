// https://leetcode.com/problems/longest-common-subsequence/

const { assertArrayEquals } = require('../../test/assertEquals');
function longestCommonSubsequence(str1, str2) {
  // handle empty string inputs
  if (!str1 || !str2) return [];
  str1 = ' ' + str1;
  str2 = ' ' + str2;

  // set string2 as the rows
  // let grid = new Array(str2.length).fill(new Array(str1.length).fill(''));
  const grid = Array.from(Array(str2.length), () =>
    new Array(str1.length).fill('')
  );

  for (let i = 1; i < str2.length; i++) {
    for (let j = 1; j < str1.length; j++) {
      // if same char, then concatenate
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
