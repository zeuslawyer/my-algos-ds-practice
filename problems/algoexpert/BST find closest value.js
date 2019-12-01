// https://www.programcreek.com/2014/05/leetcode-closest-binary-search-tree-value-java/

/**
 *  Find Closest Value In BST
Find Closest Value In BST
You are given a BST data structure consisting of BST nodes. Each BST node has an integer value stored in a property called "value" and two children nodes
stored in properties called "left" and "right," respectively. A node is said to be a BST node if and only if it satises the BST property: its value is strictly
greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either
BST nodes themselves or None (null) values. You are also given a target integer value; write a function that nds the closest value to that target value
contained in the BST. Assume that there will only be one closest value.
Sample input:
10 , 12
/ \
5 15
/ \ / \
2 5 13 22
/ \
1 14
Sample output: 13
 */


function findClosestValueInBst(tree, target) {
  return findClosest(tree, target);
}

function findClosest(tree, target, closest = Infinity) {
  if (tree === null) return closest;

  if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return findClosest(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosest(tree.right, target, closest);
  } else {
    // they're equal
    return closest;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
