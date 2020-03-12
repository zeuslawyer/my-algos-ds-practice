const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
];

/**
 *  Iterate over the matrix
 * $$ treat every point like the entry node for a graph traversal. Each node is an array of coords $$
 * for each node, if its not visited AND if its start of a river, get its neighbours using BFS or DFS
 *  incrementing the current river size if the neighbour is unvisited AND is == 1 (river), then get its neighbours and add to Q
 */

// BFS solution

function riverSizes(matrix) {
  let res = [];
  let visited = matrix.map(row => row.map(cell => false));
  // let visited =  new Array(matrix.length).fill(new Array (matrix[0].length).fill(false))

  // iterate over the matrix
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (!visited[r][c]) {
        visit(r, c, matrix, visited, res);
      }
    }
  }

  return res;
}

console.log(riverSizes(matrix));

// BFS implementation
function visit(rowIndex, colIndex, matrix, visited, res) {
  // track current river size if current node is start of river
  let currentRiverSize = 0;

  // set up Q for BFS
  let Q = [[rowIndex, colIndex]]; // each element is an array of coordinates

  // BFS
  while (Q.length > 0) {
    const currentNode = Q.pop();

    let [r, c] = currentNode;
    if (!visited[r][c]) {
      // mark visited
      visited[r][c] = true;
      // check if river
      if (matrix[r][c] === 1) {
        currentRiverSize++;
        // add neighbours to Q
        let neighbours = getNeighbours(r, c, matrix, visited);
        neighbours.forEach(neighbour => {
          Q.unshift(neighbour);
        });
      }
    } else {
    }
  }
  // after Q is empty,you have the river size for that node
  if (currentRiverSize > 0) res.push(currentRiverSize);
}

function getNeighbours(rowInd, colInd, matrix, visited) {
  let neighbours = [];
  // get prev row and next row for [r,c] => up and down
  let prevRow = rowInd - 1;
  let nextRow = rowInd + 1;
  if (prevRow >= 0) {
    // if (prevRow >= 0 && !visited[prevRow][colInd]) {
    neighbours.push([prevRow, colInd]);
  }

  if (nextRow < matrix.length)
    // if (nextRow < matrix.length && !visited[nextRow][colInd])
    neighbours.push([nextRow, colInd]);

  // get prev col and next col => left and right
  let prevCol = colInd - 1;
  let nextCol = colInd + 1;
  if (prevCol >= 0)
    // if (prevCol >= 0 && !visited[rowInd][prevCol])
    neighbours.push([rowInd, prevCol]); // push coordinates
  if (nextCol < matrix[0].length)
    // if (nextCol < matrix[0].length && !visited[rowInd][nextCol])
    neighbours.push([rowInd, nextCol]); // push coordinates

  return neighbours;
}

function $getNeighbours(r, c, grid) {
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
