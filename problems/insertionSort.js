function skienaInsertionSort(arr) {
  for (let i = 2; i <= arr.length; i++) {
    let j = i - 1;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }

  return arr;
}

// AGLOEXPERT
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // start at 1 and j is one behind
    let num = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > num) {
      // move item at j to right
      arr[j + 1] = arr[j];
      arr[j] = num; // insert num into current sorted pos
      j--;
    }
  }

  return arr;
}

console.log('--', insertionSort([-5, 10, -60, -20, 30]));
console.log('-- Skiena:', skienaInsertionSort([-5, 10, -60, -20, 30]));
console.log('--', insertionSort([-3, -8, -11, 0, 2]));
console.log('--Skiena:', skienaInsertionSort([-3, -8, -11, 0, 2]));
