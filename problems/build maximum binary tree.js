// https://leetcode.com/problems/maximum-binary-tree/submissions/

/**
 * Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
The root is the maximum number in the array.

The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.
 */

const { assertArrayEquals } = require('../test/assertEquals');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxBinTree = function (arr) {
  const end = arr.length - 1;
  return helper(arr, 0, end);
};

function helper(arr, start, end) {
  if (start > end) return null;

  // find the max val in the subarray
  let maxIdx = start;
  for (let i = start; i <= end; i++) {
    if (arr[i] > arr[maxIdx]) maxIdx = i;
  }

  let tree = new TreeNode(arr[maxIdx]);
  tree.left = helper(arr, start, maxIdx - 1);
  tree.right = helper(arr, maxIdx + 1, end);

  return tree;
}

console.log(maxBinTree([3, 2, 1, 6, 0, 5])); // [6,3,5,null,2,0,null,null,1]
