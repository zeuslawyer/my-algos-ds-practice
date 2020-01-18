function reverseWords(arr) {
  // step 1: reverse all characters
  let last = arr.length - 1;
  reverseSegment(arr, 0, last);

  // step 2: reverse each word:   iterate over it and identify  where a word has lastIndex
  // (A) when a space exists
  //(B) when it is the lastInd of the array
  let wordsStartInd;

  for (let i = 0; i < arr.length; i++) {
    // finding spaces, and a word startInd index is stored => lastInd of word
    if (arr[i] === '  ') {
      // console.log('found a space at',  i)
      if (wordsStartInd >= 0) {
        // console.log('fgoing to reverse starting from ',  wordsStartInd)
        reverseSegment(arr, wordsStartInd, i - 1);
        wordsStartInd = undefined;
      }
      // end of array, the last word
    } else if (i === arr.length - 1) {
      if (wordsStartInd >= 0) {
        reverseSegment(arr, wordsStartInd, i);
      }
    } else {
      if (wordsStartInd === undefined) {
        // console.log('setting word start at',  i)
        wordsStartInd = i;
      }
    }
  }

  return arr;
}

function reverseArr(arr) {
  let mid = Math.floor(arr.length / 2);

  for (let i = 0; i < mid; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

function reverseSegment(arr, startInd, lastInd) {
  // console.log('reversing: ', arr.slice(startInd, lastInd + 1), startInd, lastInd)
  // console.log('reversing', startInd, lastInd)

  while (startInd < lastInd) {
    // console.log(startInd, lastInd, arr[startInd], arr[lastInd])
    let temp = arr[startInd];
    arr[startInd] = arr[lastInd];
    arr[lastInd] = temp;
    startInd++;
    lastInd--;
  }

  // console.log('returning', arr)
  return arr;
}

// reverseSegment([0,1,2,3,4,5,6], 0, 6 )

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

let input2 = [' ', ' '];

console.log(reverseWords(WORDARRAY));
