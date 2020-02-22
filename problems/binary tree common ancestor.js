//  https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.

// MY explanation: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/discuss/516769/clear-javascript-with-comments-and-sequence-of-steps-in-code

/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q 
as the lowest node in T that has both p and q as descendants (where we allow a node to 
  be a descendant of itself).”
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;
  if (root.val === p || root.val === q) return root;

  const thisNode = root;
  const left = lowestCommonAncestor(thisNode.left, p, q);
  const right = lowestCommonAncestor(thisNode.right, p, q);

  // if both sub trees contain a value each, that means this is the common ancestor
  if (left && right) {
    return thisNode;
  }

  // if code reaches here then if either sub tree has a value then the other one wont
  if (left) {
    return left;
  } else {
    return right;
  }
};

//FOR BINARY SEARCH TREES, OPTIMISE BY AVOIDING NEEDLESS RECURSSION BY CHECKING ValUES
var lowestCommonAncestorBST = function(root, p, q) {
  if (!root) return;

  if (root.val === p.val || root.val === q.val) return root;

  // exploit BST properties
  let thisNode = root;
  let left, right;
  if (thisNode < p.val && thisNode < q.val) {
    // both vals are on the right of this node
    right = lowestCommonAncestor(thisNode.right, p, q);
  } else if (thisNode > p.val && thisNode > q.val) {
    // both vals are on the left of this node
    left = lowestCommonAncestor(thisNode.left, p, q);
  } else {
    // one val is on left and the other on right
    left = lowestCommonAncestor(thisNode.left, p, q);
    right = lowestCommonAncestor(thisNode.right, p, q);
  }

  // the recursions will return either a node with the matching val OR null
  if (left && right) {
    return thisNode;
  } else if (left) {
    return left;
  } else {
    return right;
  }
};
