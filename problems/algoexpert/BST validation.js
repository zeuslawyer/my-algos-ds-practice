/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * https://leetcode.com/problems/validate-binary-search-tree/submissions/
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return validateTree(root);
};

function validateTree(node, min = -Infinity, max = Infinity) {
  if (!node) return true;

  if (min >= node.val || max <= node.val) return false;

  let leftTree = validateTree(node.left, min, node.val);
  let rightTree = validateTree(node.right, node.val, max);

  return leftTree && rightTree;
}
