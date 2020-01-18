const input = [8, 10, 2];

function arrOfProd(arr) {
  const res = [],
    left = [],
    right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      left[i] = 1;
    } else {
      left[i] = arr[i - 1] * left[i - 1];
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      right[i] = 1;
    } else {
      right[i] = arr[i + 1] * right[i + 1];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    res[i] = left[i] * right[i];
  }

  return res;
}

let ans = arrOfProd(input);
console.log(ans);
