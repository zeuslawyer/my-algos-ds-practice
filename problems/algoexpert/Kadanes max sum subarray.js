/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 * Example:Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 *  https://leetcode.com/problems/maximum-subarray/
 */

// time complexity O(N)
function maxSubArray(arr) {
  let maxTillCurrent = -Infinity;
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    maxTillCurrent = Math.max(current, current + maxTillCurrent);
    maxSum = Math.max(maxSum, maxTillCurrent);
  }
  return maxSum;
}

function maxSubArrayII(arr) {
  let maxTillCurrent = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    maxTillCurrent = Math.max(current, current + maxTillCurrent);
    maxSum = Math.max(maxSum, maxTillCurrent);
  }
  return maxSum;
}

let n = maxSubArray([3, 1, -1, 4]); // 7
let u = maxSubArrayII([-2, -3, -4, -1]); // -1

console.log(n, u);
