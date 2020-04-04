// https://leetcode.com/explore/learn/card/binary-search/126/template-ii/949/

// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/discuss/418472/JavaScript-Solution-and-1-Concern-if-someone-could-help-me

var findMin = function(nums) {
  if (!nums.length) return -1;

  let start = 0;
  let end = nums.length - 1;

  // look for the pivot. the first element on pivots right is the smallest. pivot will be largest
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] < nums[end]) {
      // rhs in order, so pivot is not here, so min is below and up to mid
      end = mid;
    } else {
      // rhs is not sored, so pivot is on the rhs so min is after mid
      start = mid + 1;
    }
  }

  return nums[end];
};

let a = findMin([3, 4, 5, 1, 2]); //1
let b = findMin([4, 5, 6, 7, 0, 1, 2]); //0

console.log(a, b);
