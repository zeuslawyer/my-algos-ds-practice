const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]; // ans 3 islands

var numIslands = function(grid) {
  let islands = 0;
  let res = [];
  // no need for visited, as you only visit 1s

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (+grid[r][c] === 1) {
        islands++;
        traverse(r, c, grid, res);
      }
    }
  }

  return { islands, res };
};

// as traverse occurs, mark nodes as 0
function traverse(row, col, grid, res) {
  let len = 0;
  // BFS - add all islands to Q
  let Q = [[row, col]];
  while (Q.length > 0) {
    let [r, c] = Q.pop();

    // add to length if its still 1
    console.log('look, some are not 1', grid[r][c]);
    if (+grid[r][c] === 1) len++;

    // mark this as 0
    grid[r][c] = 0;
    let neighbours = getNeighbours(r, c, grid);
    //add each neighbour to the Q
    neighbours.forEach(neighbour => {
      let [r, c] = neighbour;
      if (+grid[r][c] === 1) {
        Q.unshift(neighbour); // add it to Q only if its a 1
      }
    });
  }
  if (len > 0) res.push(len);
}

function getNeighbours(r, c, grid) {
  let neighbours = [];
  // first and last rows
  if (r > 0) {
    let top = [r - 1, c];
    neighbours.push(top);
  }
  if (r < grid.length - 1) {
    let bottom = [r + 1, c];
    neighbours.push(bottom);
  }
  // left and right cols
  if (c > 0) {
    let left = [r, c - 1];
    neighbours.push(left);
  }
  if (c < grid[0].length - 1) {
    let right = [r, c + 1];
    neighbours.push(right);
  }

  return neighbours;
}

// let ans = numIslands(grid);
// console.log(ans);

let testCase = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
]; // ans is 1

console.log('testCase', numIslands(testCase));
