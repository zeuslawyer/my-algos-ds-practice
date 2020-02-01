let input = [
  'p',
  'e',
  'r',
  'f',
  'e',
  'c',
  't',
  '  ',
  'm',
  'a',
  'k',
  'e',
  's',
  '  ',
  'p',
  'r',
  'a',
  'c',
  't',
  'i',
  'c',
  'e'
];

function reverseWords(arr) {
  arr = reverseArr(arr);
  let wordStart;

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];

    if (char === '  ') {
      if (wordStart !== undefined) {
        // found word end
        reverseArr(arr, wordStart, i - 1);
        wordStart = undefined;
      }
    } else if (i === arr.length - 1) {
      if (wordStart !== undefined)
        // end of array
        reverseArr(arr, wordStart, i);
    } else {
      // character anywhere in array
      if (wordStart === undefined) {
        wordStart = i;
      }
    }
  }

  return arr;
}

let ans = reverseWords(["a"," "," ","b"]);
console.log('RESULT', ans);

function reverseArr(arr, start = 0, end = undefined) {
  if (!end) end = arr.length - 1;

  let temp = arr;
  // console.log('reversing...', temp);
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  // console.log('just reversed', arr);

  return arr;
}
