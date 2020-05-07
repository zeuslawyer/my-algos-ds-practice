/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(big, small) {
  if (big.length < small.length) return '';

  const smallCharCount = {};
  for (const char of small) {
    smallCharCount[char] = smallCharCount[char] + 1 || 1;
  }
  const numSmallUniqueChars = Object.keys(smallCharCount).length;

  let windowStart = 0;
  let windowEnd = Infinity;

  const targetCharCount = {};
  let numTargetUniqueChars = 0;

  let left = 0;
  let right = 0;

  while (right < big.length) {
    let rightChar = big[right];
    if (!(rightChar in smallCharCount)) {
      right++;
      continue;
    }
    // else rightChar is in the target string
    targetCharCount[rightChar] = targetCharCount[rightChar] + 1 || 1;
    if (targetCharCount[rightChar] === smallCharCount[rightChar])
      numTargetUniqueChars++;

    while (numTargetUniqueChars === numSmallUniqueChars && left <= right) {
      // resize window if current window is smaller
      if (right - left < windowEnd - windowStart) {
        windowStart = left;
        windowEnd = right;
      }

      let leftChar = big[left];
      if (!(leftChar in smallCharCount)) {
        left++;
        continue;
      }

      // else leftChar is in the target string, so adjust counts, and shrink window
      if (targetCharCount[leftChar] === smallCharCount[leftChar]) {
        numTargetUniqueChars--;
      }
      targetCharCount[leftChar] -= 1;
      left++;
    }

    right++;
  }

  // window start and end are available
  if (windowEnd === Infinity) return '';

  return big.slice(windowStart, windowEnd + 1);
}

const S = 'ABCDE';
const T = 'DA';
let a = minWindow(S, T); // BANC
console.log(a);
