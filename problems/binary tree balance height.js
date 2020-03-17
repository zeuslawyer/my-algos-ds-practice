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
var isBalanced = function(root) {
  if (!root) return true;

  let leftMax = checkSymmetry(root.left);
  let rightMax = checkSymmetry(root.right);

  console.log(leftMax, rightMax);

  return (
    isBalanced(root.right) &&
    isBalanced(root.left) &&
    Math.abs(leftMax - rightMax) <= 1
  );
};

function checkSymmetry(root, depth = 0) {
  if (!root) return depth;
  let left = checkSymmetry(root.left, depth + 1);
  let right = checkSymmetry(root.right, depth + 1);

  return Math.max(left, right);
}
