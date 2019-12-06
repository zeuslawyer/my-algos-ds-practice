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
function maxProdTillCurrentuctSubArray(arr) {
  let maxProd = arr[0];
  let maxProdTillCurrent = arr[0];
  let minProdTillCurrent = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentMin = minProdTillCurrent;
    let currentMax = maxProdTillCurrent;
    let currentNum = arr[i];

    minProdTillCurrent = Math.min(
      currentNum,
      currentNum * currentMax,
      currentNum * currentMin
    );
    maxProdTillCurrent = Math.max(
      currentNum,
      currentNum * currentMax,
      currentNum * currentMin
    );

    maxProd = Math.max(maxProd, maxProdTillCurrent);
  }

  return maxProd;
}

let maxProd = maxProdTillCurrentuctSubArray([2, 3, -2, 4]);
console.log('res', maxProd);
