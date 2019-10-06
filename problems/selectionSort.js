module.exports = arr => {
  // set initial minIndex
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    // console.log(arr);
    // extract new minIndex if any, from rest of array
    for (let j = i + 1; j < arr.length; j++) {
      // compare each with minIndex
      // console.log('i, j and min ind: ', i, j, minIndex);
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // swap, only if minIndex is no longer i
    if (minIndex !== i) {
      // console.log('swapping', arr[i], arr[minIndex]);
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};
