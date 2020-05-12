// https://leetcode.com/problems/maximum-binary-tree/submissions/

const { AssertArrayEquals } = require('.');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var constructMaximumBinaryTree = function (arr) {
  const end = arr.length - 1;
  return helper(arr, 0, end);
};

function helper(arr, start, end) {
  if (start > end) return null;

  let maxIdx = start;

  for (let i = start; i <= end; i++) {
    if (arr[i] > arr[maxIdx]) maxIdx = i;
  }

  let tree = new TreeNode(arr[maxIdx]);
  tree.left = helper(arr, start, maxIdx - 1);
  tree.right = helper(arr, maxIdx + 1, end);

  return tree;
}

const d = constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]);
const func = constructMaximumBinaryTree;
