function binarySearch(arr, target) {
  if (target > arr[arr.length - 1] || target < arr[0]) return -1;
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    }
  }

  return -1;
}

// recursive
function $binarySearch(arr, target) {
  if (target < arr[0] || target > arr[arr.length - 1]) {
    return -1;
  }

  function find(arr, min, max) {
    if (min > max) return -1;
    let mid = Math.floor((min + max) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      return find(arr, min, mid - 1);
    } else {
      return find(arr, mid + 1, max);
    }
  }

  return find(arr, 0, arr.length - 1);
}
