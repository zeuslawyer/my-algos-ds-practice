class BST {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (val < this.val) {
      if (this.left) {
        this.left.insert(val);
      } else {
        this.left = new BST(val);
      }
    } else {
      // right is > or ==
      if (this.right) {
        this.right.insert(val);
      } else {
        this.right = new BST(val);
      }
    }
  }
}

const arr = [10, 15, 8, 12, 94, 81, 5, 2, 11];
const t = new BST(arr[0]);
for (let i = 1; i < arr.length; i++) {
  t.insert(arr[i]);
}
console.log(t);
