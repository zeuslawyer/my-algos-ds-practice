class bstNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new bstNode(val);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while (current.data) {
      if (node.data === current.data) return this;
      if (node.data < current.data) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = node;
          return;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = node;
          return;
        }
      }
    }
    return this;
  }

  insertRec(val) {
    let newNode = new bstNode(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    insert(this.root);

    function insert(current) {
      if (newNode.data === current.data) return this;

      if (newNode.data > current.data) {
        if (current.right) {
          insert(current.right);
        } else {
          current.right = newNode;
          return this;
        }
      }

      if (newNode.data < current.data) {
        if (current.left) {
          insert(current.left);
        } else {
          current.left = newNode;
          return this;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    if (this.root.data === val) return true;

    let current = this.root;
    while (current) {
      if (val === current.data) return true;

      if (val > current.data) {
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      }

      if (val < current.data) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      }
    }
  }

  findRec(val) {
    if (!this.root) return false;
    if (this.root.data === val) return true;

    let current = this.root;
    function find(val) {
      if (current.data === val) return true;
      if (val < current.data) {
        if (current.left) {
          current = current.left;
          return find(val);
        } else {
          return false;
        }
      }
      if (val > current.data) {
        if (current.right) {
          current = current.right;
          return find(val);
        } else {
          return false;
        }
      }
    }

    return find(val);
  }

  remove(val) {
    f;
    if (!this.root) return null;

    let result;
    let current = this.root;
    let parent = null;

    function traverseAndRemove(start, parent) {
      let current = start;
      while (current) {
        if (val === current.data) {
          result = current.data;
          current = null;
          return result;
        }

        if (val < current.data) {
          if (current.left) {
            current = current.left;
          } else {
            return null;
          }
        }

        if (val > current.data) {
          if (current.right) {
            current = current.right;
          } else {
            return null;
          }
        }
      }
    }
  }

  bfs() {
    let traversed = [];
    if (!this.root) return traversed;

    let Q = [this.root];

    while (Q.length) {
      let current = Q.pop();
      traversed.push(current.data);
      if (current.left) Q.unshift(current.left);
      if (current.right) Q.unshift(current.right);
    }

    return traversed;
  }

  dfsPreOrder() {
    let traversed = [];
    if (!this.root) return traversed;

    visit(this.root);

    function visit(node) {
      traversed.push(node.data);
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
    }

    return traversed;
  }

  dfsPostOrder() {
    let traversed = [];
    if (!this.root) return traversed;

    function visit(node) {
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
      traversed.push(node.data);
    }

    visit(this.root);
    return traversed;
  }
}

function dfsInOrder(bst) {
  let current = bst.root;
  let traversed = [];
  if (!current) return traversed;

  function visit(node) {
    if (node.left) visit(node.left);
    traversed.push(node.data);
    if (node.right) visit(node.right);
  }

  visit(current);
  return traversed;
}
let t = new BST();
t.insert(10);
t.insertRec(3);
t.insert(15);
t.insert(6);
t.insert(1);
t.insert(12);
t.insert(20);
// console.log(t.root);

// console.log(t.findRec(15));

// console.log(t.bfs()); // [ 10, 3, 15, 1, 6, 12, 20 ]

// console.log(t.dfsPreOrder()); //[ 10, 3, 1, 6, 15, 12, 20 ]
// console.log('in order', dfsInOrder(t)); // [ 1, 3, 6, 10, 12, 15, 20 ]

// console.log('post order', t.dfsPostOrder()); // [ 1, 6, 3, 12, 20, 15, 10 ]

console.log('removing 6', t.remove(6));
console.log('new tree:', t.root);
