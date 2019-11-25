//  https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
var maxDepth = function(root) {
  function getDepth(node, depth = 0) {
    if (!node) return depth;
    depth++;
    let leftDep = getDepth(node.left, depth);
    let rightDep = getDepth(node.right, depth);

    return Math.max(leftDep, rightDep);
  }

  return getDepth(root);
};
