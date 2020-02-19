// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(top, one, two) {
  let oneDepth = getDepth(one);
  let twoDepth = getDepth(two);

  let higher, lower, diff;
  if (oneDepth > twoDepth) {
    lower = one;
    higher = two;
    diff = oneDepth - twoDepth;
  } else {
    higher = one;
    lower = two;
    diff = twoDepth - oneDepth;
  }

  return backTrackUpTree(lower, higher, diff);
}

function getDepth(node) {
  let depth = 0;
  while (node.ancestor) {
    depth++;
    node = node.ancestor;
  }
  return depth;
}

function backTrackUpTree(lower, higher, diff) {
  while (diff > 0) {
    lower = lower.ancestor;
    diff--;
  }

  // theyre at the same level
  while (lower.name !== higher.name) {
    lower = lower.ancestor;
    higher = higher.ancestor;
  }

  // now they're the same node, so return
  return lower;
}

// Do not edit the line below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
