// https://leetcode.com/problems/construct-binary-tree-from-$preorder-and-$inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} $preorder
 * @param {number[]} $inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
  return this;
}
var buildTree = function(preOrder, inOrder) {
  function helper(start, end) {
    if (start > end) return;

    let val = preOrder.shift(); // remove first (root)
    let valIdx = inOrder.indexOf(val);
    const tree = new TreeNode(val);
    console.log(val, start, end);

    // since this is preOrder, build from left tree first
    tree.left = helper(start, valIdx - 1);
    tree.right = helper(valIdx + 1, end);
    return tree;
  }

  return helper(0, inOrder.length - 1);
};

const $preorder = [3, 9, 20, 15, 7];
const $inorder = [9, 3, 15, 20, 7];

const ans = buildTree($preorder, $inorder);
console.log(ans);
