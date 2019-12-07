/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero
 * Note:
 * THE SOLUTION MAY CONTAIN DUPLICATE TRIPLETS - IS OK!, unlike  https://leetcode.com/problems/3sum/ @ threeSumNoDuplicates.js
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [ [-1, 0, 1], [-1, -1, 2], [-1, 0, 1] ]
 *
 */

function threeNumberSum(arr, target = 0) {
  let res = [];
  arr = arr.sort((a, b) => a - b); // sort ascending

  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let second = arr[left];
      let third = arr[right];
      let total = first + second + third;

      // case 1
      if (total === target) {
        let set = [first, second, third];
        res.push(set);
        left++;
        right--;
      } else if (total < target) {
        // case 2
        left++;
      } else {
        // remaining case
        right--;
      }
    }
  }

  return res;
}

let u = threeNumberSum([-1, 0, 1, 2, -1, -4], 0);

console.log(u);
