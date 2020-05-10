//https://leetcode.com/problems/longest-substring-without-repeating-characters

// Given a string, find the length of the longest substring without repeating characters.

/**
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let ans = 0;
  let left = 0;
  let right = 0;

  while (left < s.length && right < s.length) {
    const rightChar = s[right];

    if (!set.has(rightChar)) {
      set.add(rightChar);
      ans = Math.max(ans, right - left + 1);
      right++;
    } else {
      const leftChar = s[left];
      set.delete(leftChar);
      left++;
    }
  }
  return ans;
};

const res = lengthOfLongestSubstring('abcabcbb'); // The answer is "abc", with the length of 3.

assertEquals(3, res, "Longest substring for 'abcabcbb' is apparently " + res);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

assertEquals(
  lengthOfLongestSubstring('clementisacap'),
  'mentisac',
  'Algo expert base case'
);
