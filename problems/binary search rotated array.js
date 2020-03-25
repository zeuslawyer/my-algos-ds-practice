// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * refer:  https://leetcode.com/explore/learn/card/binary-search/125/template-i/952/discuss/408046/JavaScript-1Pass-Approach-w-Explanation
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1;

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (target === nums[mid]) return mid;

    // check LHS
    if (nums[start] <= nums[mid]) {
      // correct sorting - no rotation
      if (nums[start] <= target && target < nums[mid]) {
        // target in range
        end = mid - 1;
      } else {
        start = mid + 1; // target not in range, is in RHS
      }
    } else {
      // there is a rotation somewhere between start and mid, which means numbers to right od MID are sorted correctly
      if (nums[mid] < target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};
