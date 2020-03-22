// https://leetcode.com/problems/kth-smallest-element-in-a-bst/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  if (!root) return null;

  let sorted = [];
  dfsInOrder(root, sorted);
  return sorted[k - 1]; // adjust for zero basing
};

function dfsInOrder(node, sorted) {
  if (!node) return;
  dfsInOrder(node.left, sorted);
  sorted.push(node.val);
  dfsInOrder(node.right, sorted);
}
