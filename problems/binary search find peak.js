// explore section : https://leetcode.com/explore/learn/card/binary-search/126/template-ii/948/
// https://leetcode.com/problems/find-peak-element/

var findPeakElement = function(nums) {
  if (nums.length === 0) return 0;

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    // find peak on left or right
    if (nums[mid] <= nums[mid + 1]) start = mid + 1;
    // peak on right
    else end = mid; // peak on left
  }

  return start;
};
