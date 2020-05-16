// Time: O(n^2) as each subtree is produced by iterating over all nodes except root
// Space: O(H) new array is produced for each sub tree, and # of subtrees = height

const { assertArrayEquals } = require('../../test/assertEquals');

function sameBsts(arrOne, arrTwo) {
  // edge cases
  if (arrOne.length !== arrTwo.length) return false;
  if (arrOne[0] !== arrTwo[0]) return false;

  // we recurse until subtrees are empty, in which case by default we've hit true
  if (arrOne.length === 0 && arrTwo.length === 0) return true;

  // get left and right subtrees of each array
  // since its a BST, left subtree is always < node
  let leftTreeOne = getLeftTree(arrOne);
  let leftTreeTwo = getLeftTree(arrTwo);
  let rightTreeOne = getRightTree(arrOne);
  let rightTreeTwo = getRightTree(arrTwo);

  return (
    sameBsts(leftTreeOne, leftTreeTwo) && sameBsts(rightTreeOne, rightTreeTwo)
  );
}

// BSTs so left is < root and right > root
function getLeftTree(arr) {
  let root = arr[0];
  let leftTree = [];
  // start after root
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < root) leftTree.push(arr[i]);
  }
  return leftTree;
}

function getRightTree(arr) {
  let root = arr[0];
  const rightTree = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= root) rightTree.push(arr[i]); // right tree def: >=
  }
  return rightTree;
}

// TESTS
const testData = [
  {
    arrayOne: [10, 15, 8, 12, 94, 81, 5, 2, 11],
    arrayTwo: [10, 8, 5, 15, 2, 12, 11, 94, 81],
    result: true,
  },
  {
    arrayOne: [7, 6, 5, 4, 3, 2, 1],
    arrayTwo: [7, 6, 5, 4, 3, 2, 1],
    result: true,
  },
  {
    arrayOne: [10, 15, 8, 12, 94, 81, 5, 2],
    arrayTwo: [11, 8, 5, 15, 2, 12, 94, 81],
    result: false,
  },
  {
    arrayOne: [7, 6, 5, 4, 3, 2, 1],
    arrayTwo: [7, 6, 5, 4, 3, 2, 1, 0],
    result: false,
  },
  {
    arrayOne: [10, 15, 8, 12, 94, 81, 5, 2, 10],
    arrayTwo: [10, 8, 5, 15, 2, 10, 12, 94, 81],
    result: false,
  },
];

for (let i = 0; i < testData.length; i++) {
  const data = testData[i];
  assertArrayEquals(
    sameBsts(data.arrayOne, data.arrayTwo),
    data.result,
    ` Test ${i} produces ${data.result}:  `
  );
}
