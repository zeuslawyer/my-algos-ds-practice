const grid2 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]; // ans 3 islands

const grid1 = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]; // ans 1

const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
];
// ans 3

// DFS recursive implementation
var numIslandsDFS = function(grid) {
  if (!grid.length) return 0;

  let rows = grid.length;
  let cols = grid[0].length;

  let islandCount = 0;

  let visited = Array.from(grid, () => Array(cols).fill(false));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1 && !visited[row][col]) {
        ++islandCount;
        traverseIslandDFS(row, col, grid, visited);
      }
    }
  }

  return islandCount;
};

// BFS iterative implementation
var numIslandsBFS = function(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  let islandCount = 0;

  let visited = Array.from(grid, () => Array(cols).fill(false));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1 && !visited[row][col]) {
        ++islandCount;
        traverseIslandsBFS(row, col, grid, visited);
      }
    }
  }

  return islandCount;
};

// console.log("DFS", numIslandsDFS(grid));
console.log("BFS", numIslandsBFS(grid));

function traverseIslandDFS(row, col, grid, visited) {
  visited[row][col] = true;

  let neighbours = findValidNeighbours(row, col, grid, visited);
  neighbours.forEach(neigh => {
    let [r, c] = neigh;
    if (!visited[r][c] && grid[r][c] === 1) {
      traverseIslandDFS(r, c, grid, visited);
    }
  });

  return;
}

function traverseIslandsBFS(row, col, grid, visited) {
  let Q = [[row, col]]; // unshift, pop

  while (Q.length > 0) {
    let [r, c] = Q.pop();
    if (!visited[r][c]) {
      visited[r][c] = true;

      let neighbours = findValidNeighbours(r, c, grid, visited);
      neighbours.forEach(n => {
        let [nr, nc] = n;
        if (!visited[nr][nc]) {
          Q.unshift(n);
        }
      });
    }
  }
}

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
