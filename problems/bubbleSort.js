const bubbleSort = arr => {
  //outer for loop
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      // check adjacent values
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }

    // EDGE CASE:  if this iteration of outerloop did not swap anything then the array is sorted
    if (noSwap) break;
  }
  return arr;
};

const bubbleSort2 = function bubbleSort(arr) {
  let sweepCount = 0;
  while (sweepCount < arr.length) {
    let noSwaps = true;
    // console.log('Sweep Count: ', sweepCount);
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // console.log('swapping: ', arr[i], arr[i + 1], 'in', arr);
        swapIndexes(arr, i, i + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
    sweepCount++;
  }

  return arr;
};

module.exports = { bubbleSort, bubbleSort2 };

const swapIndexes = (arr, firstInd, secondInd) => {
  // var temp = arr[firstInd]
  // arr[firstInd] = arr[secondInd]
  // arr[secondInd] = temp
  [arr[firstInd], arr[secondInd]] = [arr[secondInd], arr[firstInd]];
  return arr;
};
