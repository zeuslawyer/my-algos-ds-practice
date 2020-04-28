let g1 = [
  [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
]; // ans , sorted [ 1, 1, 2, 2, 5, 21 ]

function riverSizesBFS(grid) {
  if (!grid || grid.length === 0) return 0;

  let sizes = [];
  let visited = Array.from(Array(grid.length), () =>
    Array(grid[0].length).fill(false)
  );
  let rows = grid.length;
  let cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!visited[row][col] && grid[row][col] === 1) {
        // river starts
        traverseBFS(row, col, grid, visited, sizes);
      }
    }
  }

  return sizes;
}

console.log(riverSizesBFS(g1).sort((a, b) => a - b));

function traverseBFS(row, col, grid, visited, sizes) {
  let length = 0;
  let Q = [[row, col]];

  while (Q.length > 0) {
    let [r, c] = Q.pop();
    if (!visited[r][c]) {
      visited[r][c] = true;
      length++;
      let neighbours = findValidNeighbours(r, c, grid, visited);

      neighbours.forEach((n) => {
        let [r, c] = n;
        Q.unshift([r, c]);
      });
    }
  }

  // Q empty
  if (length > 0) {
    sizes.push(length);
  }
}

/**
 * returns r,c pairs where each pair is unvisited, in range, AND === 1
 */
function findValidNeighbours(row, col, grid, visited) {
  let neighbours = []; // array of r,c pairs

  // top and bottom
  if (row - 1 >= 0 && grid[row - 1][col] === 1 && !visited[row - 1][col]) {
    neighbours.push([row - 1, col]);
  }

  if (
    row + 1 < grid.length &&
    grid[row + 1][col] === 1 &&
    !visited[row + 1][col]
  ) {
    neighbours.push([row + 1, col]);
  }

  // left and right
  if (col - 1 >= 0 && grid[row][col - 1] === 1 && !visited[row][col - 1]) {
    neighbours.push([row, col - 1]);
  }
  if (
    col + 1 < grid[0].length &&
    grid[row][col + 1] === 1 &&
    !visited[row][col + 1]
  ) {
    neighbours.push([row, col + 1]);
  }

  return neighbours;
}
