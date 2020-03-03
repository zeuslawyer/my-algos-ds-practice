// leetcode:  https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/discuss/491447/JavaScript-Solution

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
  return this;
}

var buildTree = function(inOrder, postOrder) {
  function helper(start, end) {
    if (start > end) return null ;

    const val = postOrder.pop(); // remove the root
    console.log(val, start, end);

    const tree = new TreeNode(val);
    // build right tree first as thats how the Post Order Array is built, if read backward
    // get index of root val from the inOrder array, as that splits the array in LHS tree and RHS tree
    tree.right = helper(inOrder.indexOf(val) + 1, end);
    tree.left = helper(start, inOrder.indexOf(val) - 1);

    return tree;
  }

  return helper(0, inOrder.length - 1);
};

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];
/**
 *  return
 *     3
      /   \
     9     20
          /  \
        15    7
 */

const ans = buildTree(inorder, postorder);
console.log(ans);
