// create a spiral matrix with N rows and N Columns, given N

function generate(N) {
  let res = Array.from(Array(4), () => []);
  let firstRow = 0,
    lastRow = N - 1;
  let firstCol = 0,
    lastCol = N - 1;

  let value = 1; // inserted val

  while (firstRow <= lastRow && firstCol <= lastCol) {
    // fill in first row
    for (let i = firstCol; i <= lastCol; i++) {
      res[firstRow][i] = value;
      ++value;
    }
    firstRow++;

    // fill in RHS column
    for (let i = firstRow; i <= lastRow; i++) {
      res[i][lastCol] = value;
      ++value;
    }
    lastCol--;

    // fill in bottom row
    for (let i = lastCol; i >= firstCol; i--) {
      res[lastRow][i] = value;
      ++value;
    }
    lastRow--;

    // fill in lHS Col
    for (let i = lastRow; i >= firstRow; i--) {
      res[i][firstCol] = value;
      ++value;
    }
    firstCol++;
  }

  return res;
}

console.log(generate(4));

// result
// [ [ 1, 2, 3, 4 ],
//   [ 12, 13, 14, 5 ],
//   [ 11, 16, 15, 6 ],
//   [ 10, 9, 8, 7 ] ]
