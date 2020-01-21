


function v1(){
  let rows = 5
  let cols = 3
  let grid = []
  
  for (var i = 0; i < rows; i++) {
      grid[i] = new Array(cols).fill(0)
  }
  
  for(let i=0; i<rows; i++){
    for(let j=0; j<cols;j++){
      if(i===0 || j === 0){
        grid[i][j] =  1
      }  else {
        grid[i][j] =  grid[i-1][j] + grid[i][j-1]
      }
    }
  }
  
  
  console.log(grid)
  
}

function v2(){
  let rows = 5
  let cols = 3
  let grid = []

  for(let i =0 ;i< rows; i++){
    grid.push(new Array(cols).fill(0))
  }
  for(let i=0; i<rows; i++){
    for(let j=0; j<cols;j++){
      if(i===0 || j === 0){
        grid[i][j] =  1
      }  else {
        grid[i][j] =  grid[i-1][j] + grid[i][j-1]
      }
    }
  }

  console.log(grid)

}

console.log(v2())