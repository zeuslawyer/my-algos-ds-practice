// https://leetcode.com/problems/path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum - a number to match against the branch sums
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false;

  const totals = [];
  const total = 0;

  dfs(root, total, totals);

  return totals.includes(sum);
};

function dfs(root, total, totals) {
  total += root.val;

  // leaf node
  if (!root.left && !root.right) {
    totals.push(total);
    return;
  }

  if (root.left) dfs(root.left, total, totals);
  if (root.right) dfs(root.right, total, totals);
}

// NOTE: METHOD 2
var $hasPathSum = function (root, sum) {
  if (!root) return false;

  return checkBranchSums(root, sum, 0);
};

function checkBranchSums(node, sum, sumSoFar = 0) {
  if (!node) return false;

  sumSoFar += node.val;

  if (!node.left && !node.right) {
    // leaf node so check final sum
    console.log(sumSoFar, sum);
    if (sum === sumSoFar) return true;
  }

  let left = checkBranchSums(node.left, sum, sumSoFar);
  let right = checkBranchSums(node.right, sum, sumSoFar);

  return left || right;
}
