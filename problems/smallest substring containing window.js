// https://leetcode.com/problems/minimum-window-substring

// https://leetcode.com/problems/minimum-window-substring/discuss/319210/JS-solution

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (!s || !t || s.length < t.length) return '';
  // setup with the target string
  const stringMap = getCounts(t);
  const stringCharTotal = Object.keys(stringMap).length;

  const targetMap = {}; // holds target string chars
  let targetCharTotal = 0;

  let startIdx = 0;
  let endIdx = Infinity;

  let window = [startIdx, endIdx];

  let leftIdx = 0;
  let rightIdx = 0;

  while (rightIdx < s.length) {
    let rightChar = s[rightIdx];
    console.log('!!!', rightIdx);

    // irrelevant char, so continue while loop
    if (!(rightChar in stringMap)) {
      rightIdx++;
      continue;
    }

    // char is found in the string map
    incrementCount(targetMap, rightChar);
    if (targetMap[rightChar] === stringMap[rightChar]) {
      targetCharTotal++;
    }

    // keep narrowing window if the char totals are equal, as char totals indicates if all target chars are contained in the window
    while (targetCharTotal === stringCharTotal && leftIdx <= rightIdx) {
      console.log('???', leftIdx, rightIdx);
      // get smaller window
      // if (rightIdx - leftIdx < endIdx - startIdx) {
      //   startIdx = leftIdx;
      //   endIdx = rightIdx;
      // }

      window = getWindow(leftIdx, rightIdx, window[0], window[1]);
      let leftChar = s[leftIdx];
      // left char is not relevant, so continue inner while loop
      if (!(leftChar in stringMap)) {
        leftIdx++;
        continue;
      }
      // left char is relevant...check counts, and reduce overall count as window is now sliding past this char, and excluding it
      if (targetMap[leftChar] === stringMap[leftChar]) {
        targetCharTotal--;
      }
      // always decrement the count map as left char being excluded
      decrementCount(targetMap, leftChar);
      leftIdx++; // increment inner while loop
    }

    // increment main while loop
    rightIdx++;
    console.log('window: ', window);
  }

  // use startIdx and endIdx to calculate substring
  if (window[1] === Infinity) return '';
  return s.slice(window[0], window[1] + 1);
};

const S = 'ADOBECODEBANC';
const T = 'ABC';
let a = minWindow(S, T); // BANC
console.log(a);

function getCounts(str) {
  const res = {};
  for (const char of str) {
    res[char] = res[char] ? res[char] + 1 : 1;
  }
  return res;
}

function incrementCount(obj, char) {
  obj[char] = (obj[char] || 0) + 1;
}
function decrementCount(obj, char) {
  if (obj[char] < 1) {
    throw new Error('COUNT MISMATCH!');
  } else {
    obj[char]--;
  }
}

function getWindow(left, right, start, end) {
  return right - left < end - start ? [left, right] : [start, end];
}
