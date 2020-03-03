// https://leetcode.com/discuss/interview-question/411357/
// amazon online assessment oa2

/**
 * related problems:
 * https://leetcode.com/problems/rotting-oranges/
 * https://leetcode.com/problems/walls-and-gates/ (premium)
 */

function minimumHours(rows, columns, grid) {
  let hours = 0;
  let totalFree = 0;
  let Q = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (grid[r][c] === 1) {
        // only commence bfs if server has file
        Q.unshift([r, c]);
      } else {
        totalFree += 1;
      }
    }
  }

  // how many servers are actually available?
  // let totalServers = rows * columns - Q.length;

  while (Q.length > 0 && totalFree > 0) { //(...&& totalServers > 0)
    const len = Q.length;
    for (let i = 0; i < len; i++) {
      let server = Q.pop();
      let neighbours = getValidNeighbours(server[0], server[1], grid);
      neighbours.forEach(n => {
        Q.unshift(n);
        const [r, c] = n;
        grid[r][c] = 1; // mark as with file
        totalFree -= 1; // totalServers -= 1
      });
    }

    hours += 1; // for each server that has a file, add 1 hour
  }

  return hours;
}
// FUNCTION SIGNATURE ENDS

/**
 * get valid neighbours (not out of bounds, and not diagonal)
 */
function getValidNeighbours(row, col, grid) {
  const neighbours = [];
  const rowStart = 0;
  const rowEnd = grid.length;
  const colStart = 0;
  const colEnd = grid[0].length;

  // upper
  if (row > rowStart && grid[row - 1][col] !== 1)
    neighbours.push([row - 1, col]);
  // lower
  if (row < rowEnd - 1 && grid[row + 1][col] !== 1)
    neighbours.push([row + 1, col]);
  // left
  if (col > colStart && grid[row][col - 1] !== 1)
    neighbours.push([row, col - 1]);
  // right
  if (col < colEnd - 1 && grid[row][col + 1] !== 1)
    neighbours.push([row, col + 1]);
  return neighbours;
}

const input = [
  [0, 1, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0]
];

const ans = minimumHours(input.length, input[0].length, input);
console.log(ans);
