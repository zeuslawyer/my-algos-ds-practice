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
var minDepth = function (root, depth = 0) {
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

// NOTE:  ALTERNATIVE, recursive using a depths array
// https://leetcode.com/problems/minimum-depth-of-binary-tree/submissions/

/**
 * @param {TreeNode} root
 * @return {number}
 */

var minDepth = function (root) {
  const depths = [];
  getMinDepths(root, depths, 0);

  return depths.length == 0 ? 0 : Math.min(...depths);
};

function getMinDepths(root, depths, depth = 0) {
  if (!root) return;

  depth += 1;
  if (!root.left && !root.right) depths.push(depth); // leaf node

  root.left && getMinDepths(root.left, depths, depth);
  root.right && getMinDepths(root.right, depths, depth);
}
