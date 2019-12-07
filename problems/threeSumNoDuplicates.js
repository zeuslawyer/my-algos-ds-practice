/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero
 * Note:
 * THE SOLUTION SET MUST NOT CONTAIN DUPLICATE TRIPLETS.    ->> unlike threeSum.js
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [ [-1, 0, 1], [-1, -1, 2] ]
 *  https://leetcode.com/problems/3sum/
 */

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var threeSum = function(arr) {
  let target = 0;
  let res = [];

  arr = arr.sort((a, b) => a - b); // sort ascending

  for (let i = 0; i < arr.length; i++) {
    // if this value has already been seen, continue
    if (arr[i] === arr[i - 1]) continue;

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

        // if value at left index  has already been seen, move up
        while (left < right && arr[left] == arr[left - 1]) {
          console.log('increasing');
          left++;
        }

        // if value at right index  has already been seen, move down
        while (left < right && arr[right] == arr[right + 1]) {
          console.log('decreasng');

          right--;
        }
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
};

let t = threeSum([-1, 0, 1, 2, -1, -4]); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]

let s = threeSum([-2, 0, 0, 2, 2]); // [ [ -2, 0, 2 ] ]

console.log(t);
console.log(s);
