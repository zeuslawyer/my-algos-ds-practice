// https://www.algoexpert.io/questions/Remove%20Islands
// https://drive.google.com/file/d/1lXXDGvvCYgOPk6jiXtmKWdAX2CtgVmct/view?usp=sharing

function removeIslands(matrix) {
    // Write your code here.
      let rows = matrix.length
      let cols = matrix[0].length
      if(!rows || !cols) return matrix
      
      // make state holder of matrix that marks where each `1` that is connected to the edge
      const connectedToEdgeMatrix = []
      for(let i=0; i<rows; i++){
          connectedToEdgeMatrix[i] = new Array(cols).fill(false)
      }
      
      // process borders only
      for(let row = 0; row < rows; row++){
          for (let col =0; col<cols; col++){
              let isBorderRow = (row === 0 || row === rows-1); // skip if not top or bottom edge
              let isBorderCol = (col === 0 || col === cols-1) ; // skip if not left or right edge
              let isBorder = isBorderRow || isBorderCol
              
              // DFS & update state
              if(isBorder && matrix[row][col]===1){
                traverseAndUpdateState(row, col, matrix, connectedToEdgeMatrix)
            }
          }
      }
      
      // update input by checking state (note: skip edges)
      for( let row = 1; row < rows-1; row++){
          for(let col = 1; col<cols-1; col++){
              if(matrix[row][col]===1 && connectedToEdgeMatrix[row][col] !== true){
                  matrix[row][col]= 0; // remove the island
              }
          }
      }
      
    return matrix;
  }
  
  
  function traverseAndUpdateState(row, col, matrix, stateGrid){
      let alreadyVisited = stateGrid[row][col];
      
      if ( !alreadyVisited ){
          stateGrid[row][col] = true // mark state
          
          const neighbours = getNeighbours(row, col, matrix)
          for (const [r,c] of neighbours){
                  traverseAndUpdateState(r, c, matrix, stateGrid) 			
          }
      }
  }
  
  function getNeighbours(row, col, matrix){
      const neighbours =[];
      //top
      if(row > 0 && matrix[row-1][col]=== 1) neighbours.push([row-1, col])
      // bottom
      if(row < matrix.length-1 && matrix[row+1][col]=== 1) neighbours.push([row+1, col])
      // left
      if(col > 0 && matrix[row][col-1]===1) neighbours.push([row, col-1]);
      // right
      if(col < matrix[0].length-1 && matrix[row][col+1]===1) neighbours.push([row, col+1]);
      
      return neighbours
  }
  

removeIslands([
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
  ])