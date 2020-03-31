function heapSort(array) {
  buildMaxHeap(array);
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    // swap first and last index in unsorted heap
    swap(0, endIdx, array);
    sinkDown(0, endIdx - 1, array);
  }

  return array;
}

function buildMaxHeap(array) {
  let lastParentIdx = Math.floor((array.length - 2) / 2);
  for (let i = lastParentIdx; i >= 0; i--) {
    sinkDown(i, array.length - 1, array);
  }
}

// max heap sink down
function sinkDown(currentIdx, lastIdx, array) {
  let childOneIdx = 2 * currentIdx + 1;

  while (childOneIdx <= lastIdx) {
    // let childTwoIdx = 2 * currentIdx + 2;
    let childTwoIdx = childOneIdx + 1;
    if (childTwoIdx > lastIdx) childTwoIdx = -1;

    let idxToSwap;
    if (childTwoIdx !== -1 && array[childTwoIdx] > array[childOneIdx]) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }

    if (array[idxToSwap] > array[currentIdx]) {
      swap(currentIdx, idxToSwap, array);
      currentIdx = idxToSwap;
      childOneIdx = 2 * currentIdx + 1;
    } else {
      return;
    }
  }
}

function swap(first, second, arr) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

let sorted = heapSort([3, 2, 1]);
console.log(sorted);
