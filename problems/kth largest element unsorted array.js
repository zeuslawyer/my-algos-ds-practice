// https://leetcode.com/problems/kth-largest-element-in-an-array/

const input = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 4;

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (arr, k) {
  buildMaxHeap(arr);
  console.log(arr)
  for (let i = arr.length - 1; i >= arr.length - k; i--) {
    swap(0, i, arr);
    sinkDown(0, i - 1, arr);
  }

  return arr[arr.length - k];
};

function buildMaxHeap(arr) {
  let lastChildsParentIdx = Math.floor((arr.length - 2) / 2);
  for (let parent = lastChildsParentIdx; parent >= 0; parent--) {
    sinkDown(parent, arr.length - 1, arr);
  }
}

function sinkDown(startIdx, stopIdx, arr) {
  let leftChild = 2 * startIdx + 1;

  while (leftChild <= stopIdx) {
    // let rightChild = leftChild + 1;
    let rightChild = 2 * startIdx + 2;
    if (rightChild > stopIdx) rightChild = -1;

    let swapIdx;
    if (rightChild !== -1 && arr[rightChild] > arr[leftChild]) {
      swapIdx = rightChild;
    } else {
      swapIdx = leftChild;
    }

    if (arr[swapIdx] > arr[startIdx]) {
      swap(startIdx, swapIdx, arr);
      startIdx = swapIdx;
      leftChild = 2 * startIdx + 1;
    } else {
      // sinkdown is over
      return
    }
  }
}

function swap(first, second, arr) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

let a = findKthLargest(input, k); // 4
// let b = findKthLargest([3, 2, 1, 5, 6, 4], 2); // 5
// let c = findKthLargest([7, 6, 5, 4, 3, 2, 1], 5); // 3
// let d = findKthLargest([3, 1, 2, 4], 2);

// console.log(a, b, c, d); // 3
console.log(a); 
