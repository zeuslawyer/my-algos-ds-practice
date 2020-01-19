// NOTE:  incomplete.  remove not done.  very convoluted! unlikely to come in interview.


class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  // time: O(Log N) ; space O(LogN) -> recursion
  insert(val) {
    if (val < this.value) {
      if (this.left === null) {
        this.left = new BST(val);
      } else {
        this.left.insert(val);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(val);
      } else {
        this.right.insert(val);
      }
    }
    return this;
  }

  // time: O(Log N) ; space O(1) -> iterative
  $insert(val) {
    let done = false;
    let nodeToDelete = this;

    while (!done) {
      if (val < nodeToDelete.value) {
        if (nodeToDelete.left) {
          nodeToDelete = nodeToDelete.left;
        } else {
          nodeToDelete.left === new BST(val);
          done = true;
        }
      } else {
        if (nodeToDelete.right) {
          nodeToDelete = nodeToDelete.right;
        } else {
          nodeToDelete.right = new BST(val);
          done = true;
        }
      }
    }
    return this;
  }

  // search
  contains(val) {
    if (this.value === val) return true;

    if (val < this.value) {
      // less than
      if (!this.left) {
        return false;
      } else {
        return this.left.contains(val);
      }
    } else {
      // greater than
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(val);
      }
    }

    return false;
  }
  $contains(val) {
    return !!this.findAndReturnNode(val);
  }

  dfsPreOrder(res = []) {
    res.push(this.value);
    if (this.left) this.left.dfsPreOrder(res);
    if (this.right) this.right.dfsPreOrder(res);
    return res;
  }

  dfsInOrder(res = []) {
    if (this.left) {
      this.left.dfsInOrder(res);
    }

    res.push(this.value);

    if (this.right) {
      this.right.dfsInOrder(res);
    }
    return res;
  }

  dfsPostOrder() {
    let res = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      res.push(node.value);
    }

    traverse(this);
    return res;
  }

  // returns the entire bst not its value
  findAndReturnNode(val) {
    if (this.value === val) return this;
    if (val < this.value) {
      if (this.left) {
        return this.left.findAndReturnNode(val);
      }
    } else {
      if (this.right) {
        return this.right.findAndReturnNode(val);
      }
    }

    // not found
    return null;
  }

  remove(val, parentNode = null) {
    // step 1 : find node to remove
    let currentNode = this;
    while (currentNode) {
      if (val < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (val > currentNode.value) {
        // greater than only, as we want to remove first instance
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // now currentNode.value === target val to remove
        // CASE 1:   current node has children  -- is not a leaf
        if (currentNode.left && currentNode.right) {
          // step A:  get smallest number in the RHS tree from the node to be removed
          let minValueToRight = currentNode.right.findMinValueToRight();
          // step B: put that value in place of the deleted node value
          currentNode.value = minValueToRight;
          // step C:  the node that had the min value needs to be deleted
          currentNode.right.remove(minValueToRight, currentNode);
        } 
        // CASE 2:  we are at the root node
        else if (!parentNode){  

        }
        // CASE 3
        else if (!currentNode.left && !currentNode.right) { // we are at a leaf
          
        }
      }
    }
  }

  findMinValueToRight() {
    let node = this
    let min = node.value

    while(node.left){
      min = node.left.value
      node = node.left
    }
    return min
  }
}

// console.log(new BST(10));

function createBST(arr) {
  const bst = new BST(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    bst.insert(arr[i]);
  }
  return bst;
}

const bst = createBST([10, 5, 15, 2, 5, 13, 22, 1, 14]);
// bst.$insert(433);
// console.log(bst.contains(43));
// console.log('Pre order:', bst.dfsPreOrder());
// console.log('In order:', bst.dfsInOrder());
// console.log('Post order:', bst.dfsPostOrder());

let targetNode = bst.findAndReturnNode(10);
// console.log(targetNode);
console.log('smallest node to right:', bst.fins(targetNode));
