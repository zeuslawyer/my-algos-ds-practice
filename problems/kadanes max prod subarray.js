/**
 * Given an integer array nums, find the contiguous subarray within an array (containing at least one number)
 * which has the largest product.
 * Input: [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 *
 * https://leetcode.com/problems/maximum-product-subarray
 * https://leetcode.com/problems/maximum-product-subarray/discuss/416395/JavaScript-Solution-w-Explanation
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var KadaneMaxProduct = function(arr) {
  let currentMax = arr[0];
  let currentMin = arr[0];
  let maxProd = arr[0];

  /**
   * The tricky part of this problem is that negative numbers exist in the input array. 
   * This causes situations where the smallest previous product (a negative number) can become the largest 
   * product if the next number in line is also a negative number.
   */
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let prevMax = currentMax;
    let prevMin = currentMin;

    currentMax = Math.max(current, current * prevMax, current * prevMin);
    currentMin = Math.min(current, current * prevMax, current * prevMin);

    maxProd = Math.max(maxProd, currentMax);
  }

  return maxProd;
};
let maxProd = KadaneMaxProduct([2, 3, -2, 4]);
console.log('res', maxProd);
