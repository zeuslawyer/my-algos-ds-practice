// https://leetcode.com/problems/minimum-depth-of-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root, depth = 0) {
  if (!root) return depth;
  depth++;
  if (root.left && root.right) {
    let left = minDepth(root.left, depth);
    let right = minDepth(root.right, depth);
    return Math.min(left, right);
  }

  if (!root.left) return minDepth(root.right, depth);
  if (!root.right) return minDepth(root.left, depth);
};
