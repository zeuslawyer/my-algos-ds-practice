// https://leetcode.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = [];
  let left = 0;
  let right = 0;
  let currMaxInWindow = -Infinity;

  for (right; right < k; right++) {
    if (nums[right] > currMaxInWindow) currMaxInWindow = nums[right];
  }
  res.push(currMaxInWindow);

  while (right < nums.length) {
    ++left; // maintain window size
    console.log('right is', right, 'left is', left);
    if (right - left > 2) throw new Error('Window size exceeded');

    const newMaxInWindow = getMaxInWindow(left, right, nums, currMaxInWindow);
    // update lastmax
    currMaxInWindow = Math.max(currMaxInWindow, newMaxInWindow);
    res.push(currMaxInWindow);
    right++;
  }

  return res;
};

function getMaxInWindow(start, end, arr, prevMax) {
  if (arr[start] < prevMax && arr[end] < prevMax) {
    console.log('prev max not changed: ', prevMax);
    return prevMax;
  }

  // else
  let higherOfTheNewNums = Math.max(arr[start], arr[end]);
  let maxInWindow = Math.max(prevMax, higherOfTheNewNums);
  console.log('new max is', maxInWindow, 'prev max is ', prevMax);
  return maxInWindow;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
let a = maxSlidingWindow(nums, k); // [3,3,5,5,6,7]
console.log(a);
