function mergeSortedArrays(arr1, arr2) {
  let res = [];
  let p1 = 0;
  let p2 = 0;

  // since arrays are sorted, the pointers will always be pointing to the
  // then lowest number in that array, as though numbers before the point had been popped // out

  while (p1 < arr1.length && p2 < arr2.length) {
    // edge case if values at p1 and p2 are equal

    if (arr1[p1] === arr2[p2]) {
      res.push(arr1[p1]);
      // pop both off
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      res.push(arr1[p1]);
      // pop it off
      p1++;
    } else {
      res.push(arr2[p2]);
      // pop it off
      p2++;
    }
  }

  // handle where elements are left in either array
  while (p1 < arr1.length) {
    res.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    res.push(arr2[p2]);
    p2++;
  }
  return res;
}

function mergeSort(arr) {
  // base case, arr is of 1
  if (arr.length === 1) return arr;

  // recursively mergesort each half of the array
  let mid = Math.floor(arr.length / 2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  left = mergeSort(left); // up to mid
  right = mergeSort(right); // mid onward

  //left and right will eventually be single element arrays as per base case, so stitch them together

  return mergeSortedArrays(left, right);
}

module.exports = mergeSort;

console.log(mergeSort([4, 2, 1, -5, 6]));
