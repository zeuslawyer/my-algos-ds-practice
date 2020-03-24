function qsort(arr) {
  sorter(arr, 0, arr.length - 1);
  return arr;
}

function sorter(arr, start = 0, end) {
  if (start >= end) return; // no sorting if arr size ===1
  let pivotIdx = start;
  let leftIdx = start + 1;
  let rightIdx = end;

  while (leftIdx <= rightIdx) {
    // case 1: all elems in INCORRECT pos
    if (arr[leftIdx] > arr[pivotIdx] && arr[pivotIdx] > arr[rightIdx]) {
      swap(arr, leftIdx, rightIdx);
    } else if (arr[leftIdx] <= arr[pivotIdx]) {
      // left idx in sorted position
      leftIdx++;
    } else if (arr[rightIdx] >= arr[pivotIdx]) {
      rightIdx--;
    }
  }
  swap(arr, pivotIdx, rightIdx); // puts pivot in final location
  sorter(arr, rightIdx + 1, end);
  sorter(arr, start, rightIdx - 1);

  // let leftside = rightIdx - 1 - start;
  // let rightside = end - (rightIdx + 1);

  // if (leftside < rightside) {
  //   // start with shorter recursion
  //   sorter(arr, start, rightIdx - 1);
  //   sorter(arr, rightIdx + 1, end);
  // } else {
  //   sorter(arr, rightIdx + 1, end);
  //   sorter(arr, start, rightIdx - 1);
  // }
}

function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

const list = [8, 5, 2, 9, 5, 6, 3];
const res = qsort(list);

console.log('ANS', res);
