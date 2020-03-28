// needs a PIVOT value
// assume its first in a given sub array
function qsort(arr) {
  helper(arr, 0, arr.length - 1);
  return arr;
}

function helper(arr, start, end) {
  if (start >= end) return; // base case: out of bounds or arr size = 1

  let pivotInd = start;
  let leftInd = start + 1;
  let rightInd = end;

  while (leftInd <= rightInd) {
    if (arr[leftInd] > arr[pivotInd] && arr[rightInd] < arr[pivotInd]) {
      // swap condition: both are not corretly positioned with ref to pivot
      swap(arr, leftInd, rightInd);
    }
    // else, equal or correctly in place
    if (arr[leftInd] <= arr[pivotInd]) leftInd++; // is in proper position so increment
    if (arr[rightInd] >= arr[pivotInd]) rightInd--; // is in proper position so increment
  }

  // swap pivot with right Ind so pivot is in its final, sorted position. two sub arrays on either side
  swap(arr, pivotInd, rightInd);

  // repeat recursively, shorter sub array first,then longer sub array.
  // exclude the pivot index in the sub arrays
  let leftLength = rightInd - 1 - start;
  let rightArrayLen = end - (rightInd + 1);
  let leftIsShorter = leftLength < rightArrayLen;

  if (leftIsShorter) {
    // recurse shorter first
    helper(arr, start, rightInd - 1);
    helper(arr, rightInd + 1, end);
  } else {
    // recurse shorter first
    helper(arr, rightInd + 1, end);
    helper(arr, start, rightInd - 1);
  }
}

const arr = [8, 5, 2, 9, 5, 6, 3];
qsort(arr);

function swap(arr, ind1, ind2) {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
}

const list = [8, 5, 2, 9, 5, 6, 3];
const res = qsort(list);

console.log('ans: ', res);
