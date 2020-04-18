function smallestSubstringContaining(big, small) {
  if (big.length < small.length) return '';

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

  if (right === Infinity) return ''; // not found

  return big.slice(windowStart, windowEnd + 1);
}

const S = 'ADOBECODEBANC';
const T = 'ABC';
let a = smallestSubstringContaining(S, T); // BANC
console.log(a);
