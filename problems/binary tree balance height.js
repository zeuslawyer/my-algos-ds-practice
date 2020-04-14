// https://leetcode.com/problems/balanced-binary-tree
// https://leetcode.com/problems/balanced-binary-tree/discuss/522883/Super-Easy-Javascript-Solution-beat-99.43-run-time-with-comment

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;

  let leftMax = getHeight(root.left);
  let rightMax = getHeight(root.right);

  console.log(leftMax, rightMax);

  return (
    isBalanced(root.right) &&
    isBalanced(root.left) &&
    Math.abs(leftMax - rightMax) <= 1
  );
};

function getHeight(root, depth = 0) {
  if (!root) return depth;

  if (root.left && root.right) {
    let left = getHeight(root.left, depth + 1);
    let right = getHeight(root.right, depth + 1);
    return Math.max(left, right);
  }

  // else
  if (!root.left) return getHeight(root.right, depth + 1);
  if (!root.right) return getHeight(root.left, depth + 1);
}
function $getHeight(root, depth = 0) {
  if (!root) return depth;
  let left = getHeight(root.left, depth + 1);
  let right = getHeight(root.right, depth + 1);

  return Math.max(left, right);
}
