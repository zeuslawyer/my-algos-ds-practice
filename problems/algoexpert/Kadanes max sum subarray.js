/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 * Example:Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 *  https://leetcode.com/problems/maximum-subarray/
 *  https://www.youtube.com/watch?v=JsC-TifSi4w
 */

/**
 * Iterate over the array
 * if the current value is greater than the sum of all the values so far, then
 */

// time complexity O(N)
function $maxSubArray(arr) {
  let maxSumInArrSoFar = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    maxSumInArrSoFar = Math.max(current, current + maxSumInArrSoFar);

    // update max sum pointer
    maxSum = Math.max(maxSum, maxSumInArrSoFar);
  }
  return maxSum;
}

var maxSubArray = function(nums) {
  let maxSoFar = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    maxSoFar = Math.max(current, current + maxSoFar);
    max = Math.max(max, maxSoFar);
  }
  return max;
};

let n = maxSubArray([3, 1, -1, 4]); // 7
let u = maxSubArray([-2, -3, -4, -1]); // -1
let v = maxSubArray([10, -3, 5]);

console.log(n, u, v);
