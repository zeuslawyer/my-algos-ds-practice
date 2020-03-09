//https://leetcode.com/problems/prison-cells-after-n-days/discuss/444975/JavaScript-Solution-w-Explanation

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
  let cellStr = cells.join('');
  let exists = {};

  let c = 0;
  while (c < N) {
    // check in hash
    if (exists[cellStr]) {
      // get its index in hash, and adjust for zero basing
      let cellStates = Object.keys(exists);
      let idx = cellStates.indexOf(cellStr);
      const targetIdx = N % (cellStates.length - idx);

      return convertStringToArr(cellStates[targetIdx + idx]);
    }
    // else

    exists[cellStr] = true;
    let newStr = '';
    for (let i = 0; i < cellStr.length; i++) {
      if (cellStr[i - 1] === cellStr[i + 1]) {
        newStr += '1';
      } else {
        newStr += '0';
      }
    }
    if (cellStr[0] === '1') console.log(cellStr, newStr);

    cellStr = newStr;
    c++;
  }

  return convertStringToArr(cellStr);
};

function convertStringToArr(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    res.push(+str[i]);
  }
  return res;
}

const input = [0, 1, 0, 1, 1, 0, 0, 1];
const N = 7;

let a = prisonAfterNDays(input, N); // [0,0,1,1,0,0,0,0]

let b = prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000); // [0,0,1,1,1,1,1,0]
console.log(a);
console.log(b);

// naive
var $$prisonAfterNDays = function(cells, N) {
  while (N) {
    cells = getNewCells(cells);
    N--;
  }
  return cells;
};

function getNewCells(cells) {
  let newCells = [...cells];
  for (let i = 0; i < cells.length; i++) {
    let left = cells[i - 1];
    let right = cells[i + 1];
    if (left === right) {
      // theyre the same,so cell occupied
      newCells[i] = 1;
    } else {
      newCells[i] = 0;
    }
  }
  return newCells;
}

const cells = [0, 1, 0, 1, 1, 0, 0, 1];

// const a = prisonAfterNDays(cells, 7) // [0,0,1,1,0,0,0,0]
// console.log(a)

console.log($$prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000)); // [0,0,1,1,1,1,1,0]))
