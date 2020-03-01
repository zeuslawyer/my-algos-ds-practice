// https://www.youtube.com/watch?v=TzoDDOj60zE
// https://leetcode.com/problems/rotting-oranges/

function orangesRotting(grid) {
  if (!grid || grid.length === 0) return -1;

  const FRESH = 1;
  const ROTTEN = 2;
  const EMPTY = 0;
  let minutes = 0;
  let totalFresh = 0;
  let totalRotten = 0;
  let Q = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === ROTTEN) {
        Q.unshift([i, j]);
      }

      if (grid[i][j] === FRESH) {
        totalFresh++;
      }
    }
  }

  if(totalFresh === 0) return minutes // none fresh to start so nothing to do

  while (Q.length > 0 && totalFresh > 0) {
    let len = Q.length;
    for (let i = 0; i < len; i++) {
      let current = Q.pop();
      let neighbours = getValidNeighbours(current[0], current[1], grid);
      neighbours.forEach(n => {
        const [r, c] = n;
        grid[r][c] = ROTTEN;
        Q.unshift(n);
        totalFresh -= 1;
      });
    }
    minutes += 1;
  }

  return totalFresh === 0? minutes : -1
}

function getValidNeighbours(row, col, grid) {
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
const ans2 = orangesRotting([[2,1,1],[0,1,1],[1,0,1]])
const ans3 = orangesRotting([[0,2]])

console.log(ans);
console.log(ans2);
console.log(ans3);

