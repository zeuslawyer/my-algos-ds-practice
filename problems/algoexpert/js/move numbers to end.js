// https://leetcode.com/problems/move-zeroes/
// Given an array nums, write a function to move all 0's
// to the end of it while maintaining the relative order of the non-zero elements
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

/**
 * @param {number[]} nums
 * @param {number} target number to move to end
 *
 * @return {number[]}
 */
function moveElementToEnd(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    while (start < end && arr[end] === target) {
      end--;
    }

    if (arr[start] === target) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
    start++;
  }

  return arr;
}
 
function moveElementToEnd2(arr, target) {
  let end = arr.length - 1;
  for (let i = 0; i < end; i++) {
    while (i < end && arr[end] === target) end--;

    if (arr[i] === target) {
      let temp = arr[i];
      arr[i] = arr[end];
      arr[end] = temp;
    }
  }

  return arr;
}

let t = moveElementToEnd([0, 1, 0, 3, 12], 0);
console.log(t);

let i = moveElementToEnd2([2, 1, 2, 2, 2, 3, 4, 2], 2); // [1,3,4,2,2,2,2,2]

console.log(i);
