/**
 * We have an array of integers, where:
    the integers are in the range 1..n1..n
    The array has a length of n+1
 * array has at least one integer which appears at least twice. But it may have several duplicates,
 *  and each duplicate may appear more than twice.
 * Write a function which finds an integer that appears more than once in our array. 
 * (If there are multiple duplicates, you only need to find one of them.)
 */

function findRepeat(numbers) {
  // since numbers has range 1 - N and has one or more duplicates, the max UNIQUE integers it can have is N.
  // if length of the array  > N then that excess represents the numbers of duplicates.
  // this principles means that if follow a binary search pattern, but applied to
  // SUB RANGES instead of sub arrays! we compute which subrange has duplicates (len > range)
  // by calculating the range of UNIQUES it can have and comparing that with the length of that subarray

  // iterate over the RANGE of  nums - we know thats 1 to N, and len of arr > N but last num is within range 1-N
  let floor = 1;
  let ceiling = numbers.length - 1; // because array length N+1

  // iterate over the range of the values in the array
  while (floor < ceiling) {
    // mid point in range of uniques
    let rangeMid = floor + Math.floor((ceiling - floor) / 2);
    // lower range
    let lowerRangeStart = floor;
    let lowerRangeEnd = rangeMid;

    // higher range
    let higherRangeStart = rangeMid + 1;
    let higherRangeEnd = ceiling;

    // start with lower range
    // count how many numbers in the input list fall within the lower range's bounds
    let totalNumsInRange = 0;
    for (const num of numbers) {
      if (num >= lowerRangeStart && num <= lowerRangeEnd) totalNumsInRange += 1;
    }

    // calculate range of uniques possible in sub range -> would be the length of the array if there were ZERO duplicates
    let numUniquesInLower = lowerRangeEnd - lowerRangeStart + 1;

    // compare count and the range of uniques in the lower sub range - if count > uniques then this has duplicates!
    if (totalNumsInRange > numUniquesInLower) {
      floor = lowerRangeStart;
      ceiling = lowerRangeEnd;
    } else {
      floor = higherRangeStart;
      ceiling = higherRangeEnd;
    }
  }

  // floor === ceiling
  return floor;
}

// Tests

let desc = "just the repeated number";
let actual = findRepeat([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = "short array";
actual = findRepeat([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = "medium array";
actual = findRepeat([1, 2, 5, 5, 5, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = "long array";
actual = findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
