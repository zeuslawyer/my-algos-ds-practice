function minHeightBst(arr) {
  return constructMinBst(arr, null, 0, arr.length - 1);
}

function constructMinBst(arr, bst = null, start, end) {
  if (start > end) return null;

  const midIdx = Math.floor((start + end) / 2);
  const midVal = arr[midIdx];

  if (bst === null) {
    bst = new BST(midVal);
  } else {
    bst.insert(midVal);
  }

  constructMinBst(arr, bst, start, midIdx - 1);
  constructMinBst(arr, bst, midIdx + 1, end);

  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

console.log(minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]));
