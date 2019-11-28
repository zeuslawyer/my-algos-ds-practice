// https://leetcode.com/problems/move-zeroes/
// Given an array nums, write a function to move all 0's
// to the end of it while maintaining the relative order of the non-zero elements
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      
      // find next non-zero index and assign to j
      let j = i;
      while (j < nums.length-1 && nums[j] === 0) {
        // if (j >= nums.length - 1) break;
        j++;
      }
      // swap with next non zero index
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
    }
  }
  console.log('re arranged', nums);
}

let t = moveZeroes([0, 1, 0, 3, 12]);
