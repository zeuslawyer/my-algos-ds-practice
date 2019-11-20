// given an array and a chunk size, return a new 2D array where each element is an array of size = chunk size

function chunkArray(arr, size) {
  let res = [];

  for (let el of arr) {
    const last = res[res.length - 1];

    if (!last || last.length === size) {
      res.push([el]);
    } else {
      last.push(el);
    }
  }

  return res;
}

function sliceArray(arr, size) {
  let res = [];
  let index = 0;

  while (index < arr.length) {
    res.push(arr.slice(index, index + size));
    index += size;
  }
  return res;
}

let res = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(res);

let tes = sliceArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(tes);
