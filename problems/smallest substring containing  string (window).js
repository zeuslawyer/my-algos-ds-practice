// https://leetcode.com/problems/minimum-window-substring

// https://leetcode.com/problems/minimum-window-substring/discuss/319210/JS-solution

const { assertEquals } = require('../test/assertEquals');
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

function minWindow(big, small) {
  if (!big || !small || big.length < small.length) return '';

  let windowStart = 0;
  let windowEnd = Infinity;

  // build reference data
  const charCountInSmall = {};
  for (const char of small) {
    charCountInSmall[char] = charCountInSmall[char]
      ? ++charCountInSmall[char]
      : 1;
  }
  const numCharsInSmall = Object.keys(charCountInSmall).length;

  // build window dynamic data
  const charCountInWindow = {};
  let numCharsInWindow = 0;

  let left = 0;
  let right = 0;

  while (right < big.length) {
    let rightChar = big[right];
    if (!(rightChar in charCountInSmall)) {
      right++;
      continue;
    }
    // else add to window counts
    charCountInWindow[rightChar] = charCountInWindow[rightChar]
      ? ++charCountInWindow[rightChar]
      : 1;

    if (charCountInWindow[rightChar] === charCountInSmall[rightChar]) {
      numCharsInWindow++;
    }

    // have a window with all chars accounted for
    while (numCharsInWindow === numCharsInSmall && left <= right) {
      // get window bounds
      if (right - left < windowEnd - windowStart) {
        windowStart = left;
        windowEnd = right;
      }

      let leftChar = big[left];
      // check if relevant
      if (!(leftChar in charCountInSmall)) {
        left++;
        continue;
      }

      // is relevant...
      if (charCountInWindow[leftChar] === charCountInSmall[leftChar]) {
        numCharsInWindow--; // decrement overall chars count only if they're all accounted for
      }
      charCountInWindow[leftChar]--;
      left++;
    }

    right++;
  }

  if (windowEnd === Infinity) return ''; // not found

  return big.slice(windowStart, windowEnd + 1);
}

const S = 'ADOBECODEBANC';
const T = 'ABC';

assertEquals(minWindow(S, T), 'BANC', 'base test case:');
assertEquals(
  minWindow('abcdefghijklmnopqrstuvwxyz', 'aajjttwwxxzz'),
  '',
  ' Algoexpert test case 4:'
);
