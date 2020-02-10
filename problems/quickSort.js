function qsort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotPoint = getPivotInd(arr, start, end);

    // sort the entire array, with reference to the pivot (around the pivot)
    //LHS
    qsort(arr, start, pivotPoint - 1);
    //RHS
    qsort(arr, pivotPoint + 1, end);
  }

  return arr;
}

module.exports = { qsort };

function getPivotInd(arr, start = 0, end = arr.length - 1) {
  let pivotInd = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < arr[start]) {
      pivotInd++;
      swap(arr, i, pivotInd);
    }
  }

  // swap start with pivotIndex
  swap(arr, pivotInd, start);
  console.log('pivot index is ', pivotInd)
  return pivotInd;
}

function swap(arr, ind1, ind2) {
  return ([arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]);
}


let a = qsort([8,5,2,9,5,6,3])
console.log(a)