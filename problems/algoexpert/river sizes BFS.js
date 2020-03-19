function riverSizes(grid) {
  let sizes = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        bfs(i, j, grid, sizes);
      }
    }
  }

  return sizes;
}

function bfs(i, j, grid, sizes) {
  let Q = [[i, j]];
  let size = 0;
  while (Q.length > 0) {
    let current = Q.pop();
    let [r, c] = current;

    if (grid[r][c] === 1) {
      grid[r][c] = 0;
      size++;
      const neighbours = getValidNeighbours(r, c, grid);
      neighbours.forEach(n => {
        Q.unshift([n[0], n[1]]);
      });
    }
  }

  sizes.push(size);
}

function getValidNeighbours(row, col, grid) {
  let neighbours = []; // array of r,c pairs

  // top and bottom
  if (row - 1 >= 0 && grid[row - 1][col] === 1) {
    neighbours.push([row - 1, col]);
  }

  if (row + 1 < grid.length && grid[row + 1][col] === 1) {
    neighbours.push([row + 1, col]);
  }

  // left and right
  if (col - 1 >= 0 && grid[row][col - 1] === 1) {
    neighbours.push([row, col - 1]);
  }
  if (col + 1 < grid[0].length && grid[row][col + 1] === 1) {
    neighbours.push([row, col + 1]);
  }

  return neighbours;
}
// Do not edit the line below.
exports.riverSizes = riverSizes;

const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]; // [ 2, 1, 5, 2, 2 ]

console.log(riverSizes(matrix));
