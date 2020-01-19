// class BST {
//   constructor(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
//   }

//   insert(val) {
//     if (val < this.value) {
//       if (this.left === null) {
//         this.left = new BST(val);
//       } else {
//         this.left.insert(val);
//       }
//     } else {
//       if (this.right === null) {
//         this.right = new BST(val);
//       } else {
//         this.right.insert(val);
//       }
//     }
//     return this;
//   }

//   // search
//   contains(val) {
//     if (this.value === val) return true;

//     if (val < this.value) {
//       // less than
//       if (!this.left) {
//         return false;
//       } else {
//         return this.left.contains(val);
//       }
//     } else {
//       // greater than
//       if (!this.right) {
//         return false;
//       } else {
//         return this.right.contains(val);
//       }
//     }

//     return false;
//   }

//   dfsPreOrder(res = []) {
//     res.push(this.value);
//     if (this.left) this.left.dfsPreOrder(res);
//     if (this.right) this.right.dfsPreOrder(res);
//     return res;
//   }

//   dfsInOrder(res = []) {
//     if (this.left) {
//       this.left.dfsInOrder(res);
//     }

//     res.push(this.value);

//     if (this.right) {
//       this.right.dfsInOrder(res);
//     }
//     return res;
//   }

//   dfsPostOrder() {
//     let res = [];
//     function traverse(node) {
//       if (node.left) traverse(node.left);
//       if (node.right) traverse(node.right);
//       res.push(node.value);
//     }

//     traverse(this);
//     return res;
//   }


// }

// // console.log(new BST(10));

// function createBST(arr) {
//   const bst = new BST(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     bst.insert(arr[i]);
//   }
//   return bst;
// }

// const bst = createBST([10, 5, 15, 2, 5, 13, 22, 1, 14]);
// bst.insert(433);
// console.log(bst.contains(433));
// console.log('Pre order:', bst.dfsPreOrder());
// console.log('In order:', bst.dfsInOrder());
// console.log('Post order:', bst.dfsPostOrder());
