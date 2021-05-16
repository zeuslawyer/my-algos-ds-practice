// https://leetcode.com/problems/sliding-window-maximum

/**
 * Given an array nums, there is a sliding window of size k which is moving from the very
 * left of the array to the very right. You can only see the k numbers in the window.
 * Each time the sliding window moves right by one position. Return the max val
 * in the sliding window.
 *
 * Follow up : Could you solve it in linear time?
 *
 * */

let assert = require('assert');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = [];
  let leftIdx = 0;
  let rightIdx = leftIdx + k - 1;

  let lastIdx = nums.length - 1;

  while (rightIdx <= lastIdx) {
    const subArr = nums.slice(leftIdx, rightIdx + 1);
    const max = Math.max(...subArr);

    // console.log('Max', max);
    res.push(max);
    leftIdx++;
    rightIdx++;
  }

  return res;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;

let a = maxSlidingWindow(nums, k); // [3,3,5,5,6,7]
console.log(a);

// TESTS
for (let i = 0; i < nums.length; i++) {
  const correctAnswer = [3, 3, 5, 5, 6, 7];
  const input = correctAnswer[i];
  const output = a[i];
  assertEquals(input, output, 'Test');
}

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

/**
 * ALTERNATIVE  https://leetcode.com/problems/sliding-window-maximum/discuss/562926/Easy-Javascript-Solution-(-Sliding-Window-%2B-Dequeue-)
 */

var $maxSlidingWindow = function (nums, k) {
  let windowNumbers = [], // Ddequeue
    results = [],
    max = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowNumbers.push(nums[windowEnd]);
    if (windowEnd >= k - 1) {
      results.push(Math.max(...windowNumbers));
      max = 0;
      windowNumbers.shift();
    }
  }
  return results;
};
