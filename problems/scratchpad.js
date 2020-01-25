const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]; // ans 3 islands

var numIslands = function(grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let count = 0;
  let visited = Array.from(grid, () => Array(cols).fill(false));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      visited[row][col] = count++;
    }
  }
  console.log('visited', visited, rows, cols);
};

console.log('DFS', numIslands(grid));
