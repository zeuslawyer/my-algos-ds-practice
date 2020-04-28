const { assertArrayEquals } = require('../test/assertEquals');

// DFS - with a callback
function riverSizes(grid) {
  if (!grid || grid.length === 0) return 0;
  let rows = grid.length;
  let cols = grid[0].length;
  let sizes = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        // start of river
        let size = 0; // will get passed by value so to update you need a cb
        function increment() {
          size += 1;
        }
        dfs(row, col, grid, increment);
        if (size > 0) sizes.push(size);
      }
    }
  }
  return sizes;
}

function dfs(r, c, grid, incrementSize) {
  // SAFETY
  if (grid[r][c] === 0) return;

  // else, increment size counter
  incrementSize();

  // mark as visited
  grid[r][c] = 0;

  // recurse over neighbours
  const neighbours = findValidNeighbours(r, c, grid);
  neighbours.forEach((n) => {
    dfs(n[0], n[1], grid, incrementSize);
  });
}

/**
 * returns r,c pairs where each pair is unvisited, in range, AND === 1
 */
function findValidNeighbours(row, col, grid) {
  let neighbours = []; // array of r,c pairs

  // top and bottom
  if (row > 0 && grid[row - 1][col] === 1) {
    neighbours.push([row - 1, col]);
  }

  if (row < grid.length - 1 && grid[row + 1][col] === 1) {
    neighbours.push([row + 1, col]);
  }

  // left and right
  if (col > 0 && grid[row][col - 1] === 1) {
    neighbours.push([row, col - 1]);
  }
  if (col < grid[0].length - 1 && grid[row][col + 1] === 1) {
    neighbours.push([row, col + 1]);
  }

  return neighbours;
}

// Do not edit the line below.
exports.riverSizes = riverSizes;

// Do not edit the line below.

let g = [[1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0]]; // ans [3,2,1]

let g1 = [
  [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
]; // ans sorted [ 1, 1, 2, 2, 5, 21 ]

let ans = riverSizes(g1).sort((a, b) => a - b);
console.log(ans);

assertArrayEquals(ans, [1, 1, 2, 2, 5, 21], 'correct river sizes');
