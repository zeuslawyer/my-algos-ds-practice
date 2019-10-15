function qsort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotPoint = pivot(arr, start, end);
    //LHS
    qsort(arr, start, pivotPoint - 1);
    //RHS
    qsort(arr, pivotPoint + 1, end);
  }

  return arr;
}

module.exports = { qsort };


function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotVal = arr[start];
  let pivotInd = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivotVal) {
      pivotInd++;
      swap(arr, i, pivotInd);
    }
  }

  // swap start with pivotIndex
  swap(arr, pivotInd, start);
  return pivotInd;
}

function swap(arr, ind1, ind2) {
  return ([arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]);
}
