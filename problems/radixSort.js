function getDigitAtPos(num, pos, base = 10) {
  num = Math.abs(num); // make positive

  return Math.floor(num / Math.pow(base, pos)) % base;
}

getDigitAtPos(123, 3);

function numOfDigits(num) {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num)) + 1);
}
// numOfDigits(100)

function getMaxDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let digitCount = numOfDigits(arr[i]);
    if (digitCount > max) {
      max = digitCount;
    }
  }
  return max;
}

getMaxDigits([324, 5300000, 235245]);

function radix(nums) {
  let maxDigits = getMaxDigits(nums);

  // outer loop = max digits, c being the position being sorted by
  for (let c = 0; c < maxDigits; c++) {
    // create 10 buckets where index will match digits 0-9

    let buckets = Array.from({ length: 10 }, () => []);
    // let buckets = new Array(10).fill([]);
    // inner loop iterate over nums array
    for (let i = 0; i < nums.length; i++) {
      // sort into buckets by digit pos number
      let digit = getDigitAtPos(nums[i], c, 10);
      // digit will be 0-9
      buckets[digit].push(nums[i]);
    }
    // create new nums array from the buckets for next iteration of outer loop
    nums = [].concat(...buckets);
  }

  return nums;
}

let r = radix([31, 200, 1, 45, 9200]);

console.log(r);
