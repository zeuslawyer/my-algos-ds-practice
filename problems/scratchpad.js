// https://leetcode.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let windowStart = i;
    let windowEnd = k - 1;

    const prevMax = res[res.length - 1] || -Infinity;
    let maxInWindow = getMaxInWindow(windowStart, windowEnd, prevMax, nums);
    res.push(maxInWindow);
  }

  return res;
};

function getMaxInWindow(start, end, prevMax, arr) {
  if (start <= prevMax && end <= prevMax) {
    console.log(' no change in max, its still', prevMax);
    return prevMax;
  }

  let maybeMax = Math.max(arr[start], arr[end]);
  let newMax = Math.max(prevMax, maybeMax);
  console.log('prev: ', prevMax, ' and  new:', newMax);
  return newMax;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
let a = maxSlidingWindow(nums, k); // [3,3,5,5,6,7]
console.log(a);
