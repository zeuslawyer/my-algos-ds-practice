// A tree is "superbalanced" if the difference between the depths of any two leaf nodes
// is no greater than one.

// so find the minHeight and the maxHeight of the tree
// time complexity is (N * 2) = O(N) as we iterative through every node with a DFS

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// RECURSIVE
function isBalanced(root) {
  if (!root) return true;

  // Determine if the tree is superbalanced
  let minHeight = getMinHeight(root);
  let maxHeight = getMaxHeight(root);

  let heightDiff = Math.abs(maxHeight - minHeight);
  return heightDiff <= 1;
}

function getMinHeight(node, height = 0) {
  if (!node) return height;
  height += 1;

  if (node.left && node.right) {
    let left = getMinHeight(node.left, height);
    let right = getMinHeight(node.right, height);
    return Math.min(left, right);
  }

  if (!node.left) return getMinHeight(node.right, height);
  if (!node.right) return getMinHeight(node.left, height);
}

function getMaxHeight(node, height = 0) {
  if (!node) return height;
  height += 1;

  if (node.left && node.right) {
    let left = getMaxHeight(node.left, height);
    let right = getMaxHeight(node.right, height);
    return Math.max(left, right);
  }

  if (!node.left) return getMaxHeight(node.right, height);
  if (!node.right) return getMaxHeight(node.left, height);
}

// ITERATIVE (DFS STACK)
/**
 * We do a depth-first walk ↴ through our tree, keeping track of the depth as we go.
 * When we find a leaf, we add its depth to an array of depths if we haven't seen that depth already.
 * Each time we hit a leaf with a new depth, there are two ways that our tree might now be unbalanced:
 *    - There are more than 2 different leaf depths
 *    - There are exactly 2 leaf depths and they are more than 1 apart.
 * Why are we doing a depth-first walk and not a breadth-first ↴ one?
 * You could make a case for either. We chose depth-first because it reaches leaves faster,
 * which allows us to short-circuit earlier in some cases.
 */

function $isBalanced(treeRoot) {
  // A tree with no nodes is superbalanced, since there are no leaves!
  if (!treeRoot) {
    return true;
  }

  const depths = []; // We short-circuit as soon as we find more than 2

  // Nodes will store pairs of a node and the node's depth
  const nodes = [];
  nodes.push([treeRoot, 0]);

  while (nodes.length) {
    // Pop a node and its depth from the top of our stack
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {
      // Сase: we found a leaf
      // We only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        // Two ways we might now have an unbalanced tree:
        //   1) More than 2 different leaf depths
        //   2) 2 leaf depths that are more than 1 apart
        if (
          depths.length > 2 ||
          (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false;
        }
      }
    } else {
      // Case: this isn't a leaf - keep stepping down
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }

  return true;
}

// Tests

let desc = 'full tree - recursive DFS';
let treeRoot = new BinaryTreeNode(5);
let leftNode = treeRoot.insertLeft(8);
leftNode.insertLeft(1);
leftNode.insertRight(2);
let rightNode = treeRoot.insertRight(6);
rightNode.insertLeft(3);
rightNode.insertRight(4);
assertEquals(isBalanced(treeRoot), true, desc);
desc = 'full tree - iterative DFS';
assertEquals($isBalanced(treeRoot), true, desc);

desc = 'both leaves at the same depth';
treeRoot = new BinaryTreeNode(3);
leftNode = treeRoot.insertLeft(4);
leftNode.insertLeft(1);
rightNode = treeRoot.insertRight(6);
rightNode.insertRight(9);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'both leaves at the same depth - iterative DFS';
assertEquals($isBalanced(treeRoot), true, desc);

desc = 'leaf heights differ by one';
treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'leaf heights differ by one - iterative DFS';
assertEquals($isBalanced(treeRoot), true, desc);

desc = 'leaf heights differ by two';
treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7).insertRight(8);
assertEquals(isBalanced(treeRoot), false, desc);

desc = 'leaf heights differ by two - iterative DFS';
assertEquals($isBalanced(treeRoot), false, desc);

desc = 'three leaves total';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(5);
rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8);
rightNode.insertRight(5);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'three leaves total- iterative DFS';
assertEquals($isBalanced(treeRoot), true, desc);

desc = 'both subtrees superbalanced';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(5);
rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8).insertLeft(7);
rightNode.insertRight(5);
assertEquals(isBalanced(treeRoot), false, desc);

desc = 'both subtrees superbalanced - iterative DFS';
assertEquals($isBalanced(treeRoot), false, desc);

desc = 'both subtrees superbalanced two';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(2);
leftNode.insertLeft(3);
leftNode.insertRight(7).insertRight(8);
treeRoot.insertRight(4).insertRight(5).insertRight(6).insertRight(9);
assertEquals(isBalanced(treeRoot), false, desc);

desc = 'both subtrees superbalanced two - iterative DFS';
assertEquals($isBalanced(treeRoot), false, desc);

desc = 'only one node';
treeRoot = new BinaryTreeNode(1);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'linked list tree';
treeRoot = new BinaryTreeNode(1);
treeRoot.insertRight(2).insertRight(3).insertRight(4);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'linked list tree - iterativeDSF';
assertEquals($isBalanced(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
