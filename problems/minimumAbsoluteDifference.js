
/**
 * Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two 
 * elements. 
 * Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows:
 * a, b are from arr
 * a < b
 * b - a equals to the minimum absolute difference of any two elements in arr
 *  https://leetcode.com/problems/minimum-absolute-difference/
 */


/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr = arr.sort((a, b) => a - b);

  let res = [];
  let minDiff = Infinity

  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    let next = arr[i + 1];
    let diff = Math.abs(current - next);

    if (diff === minDiff) {
      // add to existing results
      res.push([current, next]);
    }
    if (diff < minDiff) {
      // update minDiff
      minDiff = diff;
      // re intialise results with the new pair
      res = [[current, next]];
    }
  }

  return res;
};