// https://www.youtube.com/watch?v=TzoDDOj60zE
// https://leetcode.com/problems/rotting-oranges/

function orangesRotting(grid) {
  if (!grid || grid[0].length === 0) return -1;
  const FRESH = 1;
  const ROTTEN = 2;

  const Q = [];
  let freshcount = 0;
  let rottencount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === ROTTEN) {
        Q.unshift([i, j]);
        rottencount++;
      }
      if (grid[i][j] === FRESH) freshcount++;
    }
  }

  let time = 0;
  if (freshcount === 0) return time;
  if (rottencount === 0) return -1;

  console.log('Q', Q, freshcount);

  while (Q.length > 0 && freshcount > 0) {
    let len = Q.length;
    for (let i = 0; i < len; i++) {
      let current = Q.pop();
      let neighbours = getNeighbours(current[0], current[1], grid);
      neighbours.forEach(n => {
        const [r, c] = n;
        grid[r][c] = ROTTEN;
        Q.unshift(n);
        freshcount -= 1;
      });
    }
    // level has been processed
    time += 1;
  }

  console.log('ANSWER>...', freshcount);
  return freshcount === 0 ? time : -1;
}

function getNeighbours(row, col, grid) {
  const neighbours = [];
  const rowStart = 0;
  const rowEnd = grid.length;
  const colStart = 0;
  const colEnd = grid[0].length;

  // upper
  if (row > rowStart && grid[row - 1][col] === 1)
    neighbours.push([row - 1, col]);
  // lower
  if (row < rowEnd - 1 && grid[row + 1][col] === 1)
    neighbours.push([row + 1, col]);
  // left
  if (col > colStart && grid[row][col - 1] === 1)
    neighbours.push([row, col - 1]);
  // right
  if (col < colEnd - 1 && grid[row][col + 1] === 1)
    neighbours.push([row, col + 1]);
  return neighbours;
}

const input = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
];
const output = 4;

const ans = orangesRotting(input);
// const ans2 = orangesRotting([
//   [2, 1, 1],
//   [0, 1, 1],
//   [1, 0, 1]
// ]);

// const ans3 = orangesRotting([[0, 2]]);

console.log(ans); // 4
// console.log(ans2); //-1
// console.log(ans3); //0
