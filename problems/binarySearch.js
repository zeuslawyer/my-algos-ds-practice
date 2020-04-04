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

  const guessIndex = minInd + Math.floor((maxInd - minInd) / 2);

  //found it
  if (target === arr[guessIndex]) return guessIndex;

  if (target > arr[guessIndex]) {
    return binarySearchRecursion(target, arr, guessIndex + 1, maxInd);
  } else {
    return binarySearchRecursion(target, arr, minInd, guessIndex - 1);
  }

  return -1; // this is actually unreachable because of edge case 1
};

const binarySearchIteration = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  // edge case 1 - target not in range
  if (target < arr[start] || target > arr[end]) return -1;

  while (start <= end) {
    let guessIndex = start + Math.floor((end - start) / 2);

    // found it
    if (target === arr[guessIndex]) return guessIndex;

    if (target > arr[guessIndex]) {
      start = guessIndex + 1;
    } else {
      end = guessIndex - 1;
    }
  }

  return -1;
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

console.log(binarySearchIteration([1, 5, 23, 111], 111));
