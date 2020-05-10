function reverse(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    swap(left, right, arr);
    left++;
    right--;
  }

  return arr;
}

function rev(arr) {
  let mid = (arr.length - 1) / 2;

  for (let i = 0; i <= mid; i++) {
    let end = arr.length - 1 - i;
    swap(i, end, arr);
  }

  return arr;
}

function swap(left, right, arr) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

console.log(rev([1, 2, 3, 4]));
