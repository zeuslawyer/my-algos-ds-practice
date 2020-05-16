// https://leetcode.com/problems/single-element-in-a-sorted-array/
// https://www.youtube.com/watch?v=SDRJE7OQpwU&feature=youtu.be
var singleNonDuplicate = function (arr) {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0];

  let left = 0;
  let right = arr.length - 1;

  // binary search logic
  while (left < right) {
    let midIdx = Math.floor((left + right) / 2);
    const halvesAreEven = (right - midIdx) % 2 === 0;

    // find duplicate of midIdx
    if (arr[midIdx] === arr[midIdx - 1]) {
      // dupe is on the left
      if (halvesAreEven) {
        right = midIdx - 2;
      } else {
        left = midIdx + 1;
      }
    } else if (arr[midIdx] === arr[midIdx + 1]) {
      // dupe is on the right
      if (halvesAreEven) {
        left = midIdx + 2;
      } else {
        right = midIdx - 1;
      }
    } else {
      // this is the non dupe element
      return arr[midIdx];
    }
  }

  return arr[left];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2
