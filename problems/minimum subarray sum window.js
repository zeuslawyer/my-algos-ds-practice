// https://leetcode.com/problems/minimum-size-subarray-sum/submissions/
// https://leetcode.com/problems/minimum-size-subarray-sum/discuss/480984/JavaScript-Solution-Sliding-Window

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  if (!nums.length) return 0;

  let left = 0;
  let right = 0;
  let sum = 0;

  let minLen = Infinity;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= s && left <= right) {
      // adjust window
      minLen = Math.min(minLen, right - left + 1);

      let leftNum = nums[left];
      sum -= leftNum;

      left++;
    }

    right++;
  }
  if (minLen === Infinity) return 0;
  return minLen;
};

let a = minSubArrayLen(11, [1, 2, 3, 4, 5]); //3
console.log(a);
