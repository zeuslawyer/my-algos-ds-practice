// https://leetcode.com/problems/number-of-islands/

// CONSTANT SPACE, NO VISITED MATRIX

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let numIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        numIslands++;
        bfs(i, j, grid);
      }
    }
  }

  console.log('answer is', numIslands);

  return numIslands;
};

function bfs(i, j, grid) {
  let Q = [[i, j]];

  while (Q.length > 0) {
    let current = Q.pop();
    let [r, c] = current;

    if (grid[r][c] === '1') {
      grid[r][c] = '0';
      const neighbours = getValidNeighbours(r, c, grid);
      neighbours.forEach(n => {
        const [i, j] = n;
        Q.unshift(n);
      });
    }
  }
}

function getValidNeighbours(row, col, grid) {
  let neighbours = []; // array of r,c pairs

  // top and bottom
  if (row - 1 >= 0 && grid[row - 1][col] === '1') {
    neighbours.push([row - 1, col]);
  }

  if (row + 1 < grid.length && grid[row + 1][col] === '1') {
    neighbours.push([row + 1, col]);
  }

  // left and right
  if (col - 1 >= 0 && grid[row][col - 1] === '1') {
    neighbours.push([row, col - 1]);
  }
  if (col + 1 < grid[0].length && grid[row][col + 1] === '1') {
    neighbours.push([row, col + 1]);
  }

  return neighbours;
}

var grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
]; // ans 1

grid = grid.map(r => r.map(c => c.toString())); // conver integers to string
console.log(grid);

let a = numIslands(grid);
console.log(a);
