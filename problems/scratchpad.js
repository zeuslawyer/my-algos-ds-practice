function moveElementToEnd(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    while (start < end && arr[end] === target) {
      end--;
    }

    if (arr[start] === target) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
    start++;
  }

  return arr;
}

let i = moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2); // [1,3,4,2,2,2,2,2]

console.log(i);

function moveElementToEnd2(arr, target) {
  let end = arr.length - 1;
  for (let i = 0; i < end; i++) {
    while (i < end && arr[end] === target) end--;

    if (arr[i] === target) {
      let temp = arr[i];
      arr[i] = arr[end];
      arr[end] = temp;
    }
  }

  return arr;
}
