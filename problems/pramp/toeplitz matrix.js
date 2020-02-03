// https://leetcode.com/problems/toeplitz-matrix/

/**
 * @param {number[][]} arr
 * @return {boolean}
 */
var isToeplitzMatrix = function(arr) {
  if (arr.length === 1) return true;

  let rows = arr.length; // m
  let cols = arr[0].length; // n

  for (let row = 0; row < rows - 1; row++) {
    for (let col = 0; col < cols - 1; col++) {
      let curr = arr[row][col];
      let bottomRight = arr[row + 1][col + 1];

      if (bottomRight !== curr) return false;
    }
  }

  return true;
};
