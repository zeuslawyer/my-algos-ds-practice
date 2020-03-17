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

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
      j--;
    }
    arr[j] = currentVal;
  }

  return arr;
}

console.log('--', insertionSort([-5, 10, -60, -20, 30]));
console.log('-- Skiena:', skienaInsertionSort([-5, 10, -60, -20, 30]));
console.log('--', insertionSort([-3, -8, -11, 0, 2]));
console.log('--Skiena:', skienaInsertionSort([-3, -8, -11, 0, 2]));
