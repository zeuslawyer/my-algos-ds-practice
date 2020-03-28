// https://leetcode.com/problems/symmetric-tree/
// https://leetcode.com/problems/symmetric-tree/discuss/507904/Recursive-JS-Solution-%2B-Comments-100-speed-100-memory

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
var isSymmetric = function(root) {
  if (!root) return true;

  return checkSymmetry(root.left, root.right);
};

function checkSymmetry(left, right) {
  // base case 1, and if leaf node then traversal done for that sub tree
  if (!left || !right) return left === right; // if either is null, both have to be null to return true, ie balanced

  if (left.val !== right.val) return false; // if neither are null, theyre balanced only if the values of the children are  ==

  // they values are equal, so now check subtrees, but mirrored.
  // ie- left child must equal right child and right child must equal left child

  return (
    checkSymmetry(left.left, right.right) &&
    checkSymmetry(left.right && right.left)
  );
}

// NOTE:  V 2 of logic
function checkSymmetric(left, right) {
  // case 1: both nodes equal
  if (left && right && left.val === right.val) {
    let leftSide = checkSymmetric(left.left, right.right);
    let rightSide = checkSymmetric(left.right, right.left);
    return leftSide && rightSide;

    // case 2 both nodes null
  } else if (!left && !right) {
    return true;
  }
  // all else
  return false;
}
