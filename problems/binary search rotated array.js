// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 *
 *  rotation example: (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 */

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
    // let mid = start + Math.floor((end - start) / 2);
    let mid = Math.floor((start + end) / 2);

    if (target === nums[mid]) return mid;

    //  look which side has no rotation (is not sorted) and check if target is in that range
    if (nums[start] <= nums[mid]) {
      // LHS is sorted - no rotation
      if (nums[start] <= target && target < nums[mid]) {
        // target in range
        end = mid - 1;
      } else {
        start = mid + 1; // target not in range, is in RHS
      }
    } else {
      // lhs has a rotation, so right side is sorted
      if (nums[mid] < target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

let a = search([4, 5, 6, 7, 0, 1, 2], 0); //4
let b = search([4, 5, 6, 7, 0, 1, 2], 3); // -1

console.log(a, b);
