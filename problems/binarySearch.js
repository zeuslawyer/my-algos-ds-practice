/**
 * given a SORTED- ascending array
 * and a target value
 * return the target's index or -1 if not found
 */

/**
 * Binary Search using Recursion
 * @param {number} target
 * @param {Array} arr
 * @param {number} minInd
 * @param {number} maxInd
 */
const binarySearchRecursion = (target, arr, minInd = 0, maxInd = undefined) => {
  maxInd = maxInd || arr.length - 1;

  // edge case 1: target not in range
  if (target > arr[maxInd] || target < arr[minInd]) return -1;

  // edge case 2 :  maxIndex is less than minIndex
  if (maxInd < minInd) return -1;

  const guessIndex = Math.floor((minInd + maxInd) / 2);

  //found it
  if (target === arr[guessIndex]) return guessIndex;

  if (target > arr[guessIndex]) {
    return binarySearchRecursion(target, arr, guessIndex + 1, maxInd);
  } else {
    return binarySearchRecursion(target, arr, minInd, guessIndex - 1);
  }

  return -1; // this is actually unreachable because of edge case 1
};

const binarySearchIteration = (target, arr) => {
  let minInd = 0;
  let maxInd = arr.length - 1;

  // edge case 1 - target not in range
  if (target < arr[minInd] || target > arr[maxInd]) return -1;

  while (minInd <= maxInd) {
    let guessIndex = Math.floor((minInd + maxInd) / 2);

    // found it
    if (target === arr[guessIndex]) return guessIndex;

    if (target > arr[guessIndex]) {
      minInd = guessIndex + 1;
    } else {
      maxInd = guessIndex - 1;
    }
  }

  return -1; // this is actually unreachable because of edge case 1
};

// colt steele
const _binarySearchIteration = (elem, arr) => {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
};




module.exports = { binarySearchRecursion, binarySearchIteration };
