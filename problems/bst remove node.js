// https://leetcode.com/problems/delete-node-in-a-bst/
// SOL : https://leetcode.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/141/basic-operations-in-a-bst/1006/discuss/488800/Javascript-greater-95

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) return root;

  if (root.val === key) {
    // case 1:  its a leaf node
    if (!root.left && !root.right) {
      return null; // this node gets deleted so return null
    }

    // case 2:  there is ONLY a left sub tree
    if (root.left && !root.right) {
      return root.left; // current node is deleted by simply attaching it to the left tree
    }

    // else case 3:  there is a right sub tree, and regardless of whether there is a left sub tree
    let successor = getSuccessor(root.right);
    root.val = successor.val; // delete this node by swapping its value with the successor from the right sub tree

    root.right = deleteNode(root.right, successor.val); // delete the successor from the right sub tree

    return root; // root now has a new val, so the original node is effectively deleted
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }

  return root;
};

// finds left most node in a Binary Tree, which in a BST is the smallest value in the BST.
function getSuccessor(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}
