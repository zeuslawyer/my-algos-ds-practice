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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;
  let total = 0;
  let sums = [];
  dfs(root, total, sums);
  console.log('branch sums are:', sums);
  console.log('branch max sum is :', Math.max(...sums));
  return sums.includes(sum);
};

function dfs(node, total, sums) {
  if (!node) return;

  // else add node
  total += node.val;
  if (!node.left && !node.right) {
    // leaf node,  we are done
    sums.push(total);
    return;
  }
  dfs(node.left, total, sums);
  dfs(node.right, total, sums);
}
