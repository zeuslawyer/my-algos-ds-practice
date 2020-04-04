function _search(arr, target) {
  if (!arr.length) return -1;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === target) return mid;

    // step 1 look which side has no rotation (is not sorted) and check if target is in that range
    // compare target with each side, and see if its in that

    if (arr[start] <= arr[mid]) {
      // lhs is sorted side
      if (arr[start] <= target && target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // rhs is the sorted side
      if (arr[mid] <= target && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

let a = _search([4, 5, 6, 7, 0, 1, 2], 0); //4
let b = _search([4, 5, 6, 7, 0, 1, 2], 3); // -1

console.log(a, b);
