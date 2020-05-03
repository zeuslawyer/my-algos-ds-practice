function longestCommonSubsequence(str1, str2) {
  str1 = ' ' + str1;
  str2 = ' ' + str2;

  let grid = new Array(str2.length).fill(new Array(str1.length).fill(''));

  for (let i = 1; i < str2.length; i++) {
    for (let j = 1; j < str1.length; j++) {
      // if same char, then concatenate
      if (str2[i] === str1[j]) {
        console.log('eq');
        grid[i][j] = grid[i - 1][j - 1] + str1[j];
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
  console.log(grid, ans);
}

const case1 = { str1: 'ZXVVYZW', str2: 'XKYKZPW' }; // [x,y,z,w]
let t = longestCommonSubsequence(case1.str1, case1.str2);
