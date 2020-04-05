function reverseWords(arr) {
  arr = reverse(arr);

  for (let i = 0; i < arr.length; i++) {
    let spaceIdx = i;

    while (arr[spaceIdx] !== '  ' && spaceIdx < arr.length) {
      spaceIdx++;
    }

    if (spaceIdx !== 0) {
      let wordEnd = spaceIdx - 1;
      reverse(arr, i, wordEnd);

      i = spaceIdx; // for loop will add 1
    }
  }

  return arr;
}

function reverse(arr, start = 0, end) {
  if (!end) end = arr.length - 1;
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
  return arr;
}

function swap(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}
let WORDARRAY = [
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

let input2 = ['  ', '  '];

let a = reverseWords(['a', '  ', '  ', 'b']);
let b = reverseWords(input2);
let c = reverseWords(WORDARRAY);
// console.log(a);
// console.log(b);
console.log(c);
