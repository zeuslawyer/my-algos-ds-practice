const test = require('./problems/test');
console.log('logging...', test());

exports.ALL = {
  test: require('./problems/test'),
  reverseString: require('./problems/reverseString'),
  binary: require('./problems/binarySearch'),
  pipecompose: require('./problems/pipe-compose.js'),
  substringMatcher: require('./problems/substringMatcher.js'),
  bubble: require('./problems/bubbleSort.js'),
  selSort: require('./problems/selectionSort.js'),
  insertionSort: require('./problems/insertionSort.js'),
  mergeSortedArrays: require('./problems/mergeSortedArrays.js'),
  mergeSort : require('./problems/mergeSort.js')
};
