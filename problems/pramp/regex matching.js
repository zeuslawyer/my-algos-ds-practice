/**
 * reference:  https://www.youtube.com/watch?v=l3hda49XcDE&t=563s
 *https://github.com/mission-peace/interview/blob/master/src/com/interview/dynamic/RegexMatching.java
 * https://leetcode.com/problems/regular-expression-matching
 * https://leetcode.com/problems/regular-expression-matching/discuss/346727/JavaScript-with-Dynamic-Programming
 */
function isMatch(s, p) {
  s = ' ' + s;
  p = ' ' + p;
  let dp = Array.from(Array(s.length), () => Array(p.length));
  dp[0][0] = true; // empty string and empty pattern

  // fill up the top row and deals with patterns like a* or a*b* etc
  for (let i = 1; i < p.length; i++) {
    if (p[i] === '*') {
      dp[0][i] = dp[0][i - 2];
    } else {
      dp[0][i] = false;
    }
  }

  for (let r = 1; r < s.length; r++) {
    dp[r][0] = false; // set first col to false
    for (let c = 1; c < p.length; c++) {
      // RULE 1: == or pat=="."
      if (s[r] === p[c] || p[c] === '.') {
        dp[r][c] = dp[r - 1][c - 1]; // northwest

        // RULE 2: pat ==="*"
      } else if (p[c] === '*') {
        // RULE 2A : 0 occurence of the pat before *, => go 2 left
        dp[r][c] = dp[r][c - 2];

        //RULE 2B:  but update if pat before the * == char OR ".", => 1 occurence of pat before *
        if (s[r] === p[c - 1] || p[c - 1] === '.') {
          dp[r][c] = dp[r][c] || dp[r - 1][c]; // same, if true, or north if false
        }
      } else {
        dp[r][c] = false;
      }
    }
  }

  // console.log(dp)

  return dp[s.length - 1][p.length - 1];
}

let ans1 = isMatch('aaa', 'ab*a*c*a'); // true
let ans2 = isMatch('abcz', 'ab*c.'); // true
let ans3 = isMatch('aqcz', 'ab*c.'); // false
let ans4 = isMatch('ab', '.*'); // true
let ans5 = isMatch('mississippi', 'mis*is*ip*.'); // true

console.log(ans1, ans2, ans3, ans4, ans5);
