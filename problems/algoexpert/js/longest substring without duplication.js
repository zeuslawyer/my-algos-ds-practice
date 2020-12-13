/**
  Write a function that takes in a string and returns its longest substring
  without duplicate characters.
  You can assume that there will only be one longest substring without duplication.
   */

const { assertEquals } = require('../../test/assertEquals');

function longestSubstringWithoutDuplication(str) {
  if (str.length <= 1) return str;

  const lastSeenAt = {};

  let startIdx = 0;
  let longest = [startIdx, 0]; // start and end idx

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // if we have seen this char, its a dupe and we need to compute longest substring so far
    if (char in lastSeenAt) {
      // update startIdx to start after the last seen index of the current char which is the dupe
      // to make sure startIdx doesnt go backwards in array, we use Math.max
      startIdx = Math.max(startIdx, lastSeenAt[char] + 1);
    }

    // compare the substring with the currently store longest
    if (i - startIdx > longest[1] - longest[0]) {
      longest = [startIdx, i];
    }

    // update the last seen at so that next call to Math.max shows updated lastSeen
    lastSeenAt[char] = i;
  }

  return str.slice(longest[0], longest[1] + 1);
}

let t = longestSubstringWithoutDuplication('clementisacap');

assertEquals(
  longestSubstringWithoutDuplication('clementisacap'),
  'mentisac',
  'example case in Algo expert: '
);

assertEquals(
  longestSubstringWithoutDuplication('str'),
  'str',
  'made up case: '
);

assertEquals(
  longestSubstringWithoutDuplication('a'),
  'a',
  'single letter string: '
);
assertEquals(
  longestSubstringWithoutDuplication('abccdeaabbcddef'),
  'cdea',
  'Test case 6: '
);
