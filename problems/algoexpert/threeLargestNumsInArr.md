
# THREE LARGEST NUMBERS
Find Three Largest Numbers
Write a function that takes in an array of integers and returns a sorted array of the
three largest integers in the input array. Note that the function should return duplicate
integers if necessary; for example, it should return [10, 10, 12] for an input array of [10,
5, 9, 10, 12].
Sample input: [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
Sample output: [18, 141, 541]

```JavaScript
function $findThreeLargestNumbers(array) {
  array = array.sort((a, b) => a - b);
  return array.slice(array.length - 3);
}

function findThreeLargestNumbers(array) {
  let res = [null, null, null];
  // let res = Array.from(new Array(3), () => null);
  for (let num of array) {
    if (!res[2] || num > res[2]) {
      insertAndShift(res, num, 2);
    } else if (!res[1] || num > res[1]) {
      // res[1] = num
      insertAndShift(res, num, 1);
    } else if (!res[0] || num > res[0]) {
      // res[0]= num
      insertAndShift(res, num, 0);
    }
  }
  return res;
}

function insertAndShift(arr, num, insertIndex) {
  console.log('before', num, arr);
  for (let i = 0; i <= insertIndex; i++) {
    if (i === insertIndex) {
      arr[i] = num;
    } else {
      arr[i] = arr[i + 1];
    }
  }

  console.log('after', num, arr);
}

// let t = findThreeLargestNumbers([4, 2, 6, 5, 3]);
// let t = findThreeLargestNumbers([7, 8, 3, 11, 43, 55]);
let t = findThreeLargestNumbers([
  -1,
  -2,
  -3,
  -7,
  -17,
  -27,
  -18,
  -541,
  -8,
  -7,
  7
]);
console.log(t);
```
