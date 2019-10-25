const mergeSortedArrays = require('./mergeSortedArrays');

function mergeSort(arr) {
  // base case, arr is of 1
  if (arr.length === 1) return arr;

  // recursively mergesort each half of the array
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // up to mid
  let right = mergeSort(arr.slice(mid)); // mid onward

  //left and right will eventually be single element arrays as per base case, so stitch them together

  return mergeSortedArrays(left, right);
}

module.exports = mergeSort;
