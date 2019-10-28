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
          // return current.right
        }
      } else {
        // traverse left
        if (current.left) {
          return insertIntoBST(newNode, current.left);
        } else {
          // no LHS so insert here
          current.left = newNode;
          // return current.left
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

    return true;
  }

  BFS(){
    
    let q = [this.root]  // FIFO - pop(remove from len-1) + unshift(insert at position 0)
    let traversed = []

    while(q.length > 0) {
      let current = q.pop()
      traversed.push(current)
      if (current.left) q.unshift(current.left)
      if (current.right) q.unshift(current.right)
    }
    return traversed
  }

  dfsPreOrder(){
    let traversed = []

    function traverse(node){
      // store its value
      traversed.push(node.data)

      // traverse left
      if(node.left) traverse(node.left)
      // traverse right
      if(node.right) traverse(node.right)

      return traversed
    }

    traverse(this.root)
    return traversed
  }


}

module.exports = {BST};

let tree = new BST()
tree.insert(0).insert(-5).insert(5).insert(-3).insert(3).insert(6).insert(-6)
let bfs = tree.BFS()
// console.log(tree.root)
// console.log(bfs.map(node=>node.data))

console.log(tree.dfsPreOrder())




