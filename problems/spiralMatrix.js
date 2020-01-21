// create a spiral matrix with N rows and N Columns, given N

function generate(N) {
  let res = Array.from(Array(4), () => []);
  let rowStart = 0,
    rowEnd = N - 1;
  let colStart = 0,
    colEnd = N - 1;

  let value = 1; // inserted val

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // fill in first row
    for (let i = colStart; i <= colEnd; i++) {
      res[rowStart][i] = value;
      ++value;
    }
    rowStart++;

    // fill in RHS column
    for (let i = rowStart; i <= rowEnd; i++) {
      res[i][colEnd] = value;
      ++value;
    }
    colEnd--;

    // fill in bottom row
    for (let i = colEnd; i >= colStart; i--) {
      res[rowEnd][i] = value;
      ++value;
    }
    rowEnd--;

    // fill in lHS Col
    for (let i = rowEnd; i >= rowStart; i--) {
      res[i][colStart] = value;
      ++value;
    }
    colStart++;
  }

  return res;
}

console.log(generate(4));

// result
// [ [ 1, 2, 3, 4 ],
//   [ 12, 13, 14, 5 ],
//   [ 11, 16, 15, 6 ],
//   [ 10, 9, 8, 7 ] ]
