/**
  Write a function that takes in an array of integers and returns a boolean
  representing whether the array is monotonic. 
  An array is said to be monotonic if its elements, from left to right, are
  entirely non-increasing or entirely non-decreasing.
   */

const { assertEquals } = require('../../test/assertEquals');

// time: O(N); space O(1)
function isMonotonic(arr) {
  let isIncreasing = true;
  let isDecreasing = true;

  // compare each with prev so start at 1
  for (let i = 1; i < arr.length; i++) {
    let prev = arr[i - 1];
    let curr = arr[i];

    // if its equal then boolean does not change as it maintains direction
    if (curr < prev) isIncreasing = false; // it is decreasing
    if (prev < curr) isDecreasing = false;
  }

  return isIncreasing || isDecreasing;
}

assertEquals(
  isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]),
  true,
  'Test case 1, -ve with 1  dupe '
);

assertEquals(isMonotonic([]), true, 'Test case 2, empty array : ');
assertEquals(isMonotonic([1, 2]), true, 'Test case 4, with 2 elems : ');
assertEquals(
  isMonotonic([1, 2, 0]),
  false,
  'Test case 9, mixes inc with dec : '
);
assertEquals(
  isMonotonic([-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -7, -9, -10, -11]),
  false,
  'Test case 12, multiple dupes returns false : '
);
