class bstNode {
  constructor(val) {
    this.data = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // with a while loop
  $insert(val) {
    let newNode = new bstNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      // if equal do nothing
      if (newNode.data === current.data) {
        return this;
      }

      if (newNode.data > current.data) {
        // move right
        if (current.right) {
          current = current.right;
        } else {
          // no RHS, so insert here
          current.right = newNode;
          return this;
        }
      } else {
        // move left
        if (current.left) {
          current = current.left;
        } else {
          // no LHS, so insert here
          current.left = newNode;
          return this;
        }
      }
    }

    // let home = insertIntoBST(newNode, this.root)
    // console.log('home: ', home)

    // return this
  }

  // insert with recursion
  insert(val) {
    let newNode = new bstNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // helper
    function insertIntoBST(newNode, current) {
      // if equal do nothing
      if (newNode.data === current.data) {
        return this;
      }

      // traverse right
      if (newNode.data > current.data) {
        if (current.right) {
          return insertIntoBST(newNode, current.right);
        } else {
          // no RHS, so insert here
          current.right = newNode;
          return this;
        }
      } else {
        // traverse left
        if (current.left) {
          return insertIntoBST(newNode, current.left);
        } else {
          // no LHS so insert here
          current.left = newNode;
          return this;
        }
      }
    }

    insertIntoBST(newNode, this.root);

    return this;
  }

  // recursively
  find(val, node = this.root) {
    if (!node) return false;
    if (node.data === val) return true;

    // let current = this.root

    // traverse right
    if (val > node.data) {
      if (node.right) {
        node = node.right;
        return this.find(val, node);
      } else {
        return false;
      }
    } else {
      // traverse left
      if (node.left) {
        node = node.left;
        return this.find(val, node);
      } else {
        return false;
      }
    }
  }

  // with loop
  $find(val) {
    if (!this.root) return false;
    if (val === this.root.data) return true;
    let current = this.root;

    while (true) {
      if (val > current.data) {
        // traverse right
        if (current.right) {
          current = current.right;
        } else {
          // leaf -> hence not found
          return false;
        }
      } else if (val < current.data) {
        // traverse left
        if (current.left) {
          current = current.left;
        } else {
          // leave -> hence not found
          return false;
        }
      } else {
        // val = data
        return true;
      }
    }
  }

  // BFS - queue
  BFS() {
    let q = [this.root]; // FIFO - pop(remove from len-1) + unshift(insert at position 0)
    let traversed = [];

    while (q.length > 0) {
      let current = q.pop();
      traversed.push(current.data);
      if (current.left) q.unshift(current.left);
      if (current.right) q.unshift(current.right);
    }
    return traversed;
  }

  // start at root and end at leafs, left first, right second
  dfsPreOrder() {
    let traversed = [];

    function traverse(node) {
      // store its value
      traversed.push(node.data);

      // traverse left
      if (node.left) traverse(node.left);
      // traverse right
      if (node.right) traverse(node.right);

      return traversed;
    }

    traverse(this.root);
    return traversed;
  }

  // start at end (leafs) and do the root lsat, left first, right second
  dfsPostOrder() {
    let traversed = [];

    function traverse(node) {
      // travel left
      if (node.left) traverse(node.left);
      // travel right
      if (node.right) traverse(node.right);

      traversed.push(node.data);
    }

    traverse(this.root);
    return traversed;
  }

  // leafs first. travel all the way down the left most leaf, then push the node into storage, then traverse all the way down the right most leaf
  dfsInOrder() {
    let traversed = [];

    function traverse(node) {
      // travel to left most leaf
      if (node.left) traverse(node.left);
      // if no more left, store val
      traversed.push(node.data);

      // traverse right all the way to right most leaf
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return traversed;
  }
}

module.exports = { BST };

let tree = new BST();
let data = [0, -5, 5, -3, 3, 6, -6];
data.forEach(num => tree.insert(num));
console.log('tree', tree.root);

// tree.insert(0).insert(-5).insert(5).insert(-3).insert(3).insert(6).insert(-6)
let bfs = tree.BFS();
console.log('BFS', bfs);

let dfsPreOrder = tree.dfsPreOrder();

console.log('pre prder', dfsPreOrder);

let dfsPostOrder = tree.dfsPostOrder();
console.log('post order', dfsPostOrder);

let dfsInOrder = tree.dfsInOrder();
console.log('in order', dfsInOrder);

// this explains the names - think of "order" as being the location of the root node.
console.log(
  'Index of 0 in each: ',
  dfsPreOrder.indexOf(0),
  dfsPostOrder.indexOf(0),
  dfsInOrder.indexOf(0)
);
