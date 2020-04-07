// https://leetcode.com/problems/minimum-window-substring

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (!s || !t || s.length < t.length) return '';

  let charCount = {};
  for (const char of t) {
    console.log('char', char);
    if (!charCount[char]) charCount[char] = 0;
    charCount[char] += 1;
  }
  let uniqueChars = Object.keys(charCount).length;

  // track window contents
  const windowCharCount = {};
  let windowUniqueChars = 0;

  let left = 0;
  let right = 0;
  console.log(charCount);

  while (right < s.length) {
    const char = s[right];
    if (!windowCharCount[char]) windowCharCount[char] = 0;
    windowCharCount[char] += 1;

    // compare frequency of char in window with frequency or char in target, record it in the unique chars
    if (windowCharCount[char] === charCount[char]) windowUniqueChars += 1;

    while (windowUniqueChars === uniqueChars && left <= right) {
      let char = s[left];
    }
  }
};

const S = 'ADOBECODEBANC';
const T = 'ABC';
let a = minWindow(S, T);
console.log(a);
