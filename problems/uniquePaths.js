
//  https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// Space: O(MN), time O(MN)
var uniquePaths = function(m, n) {
  // let grid = []
  // for (let i = 0; i < m; i++) {
  //   // grid[i] = new Array(n).fill(0)
  //   grid.push(new Array(n).fill(0))
  // }

  // or
  let grid = Array.from(new Array(m), () => new Array(n).fill(0));


  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if(r===0 || c===0){
        // fill the top row and left most col with 1s
        grid[r][c] = 1
      } else {
        grid[r][c] = grid[r-1][c] + grid[r][c-1]
      }
    }
  }

  console.log('distances map\n', grid)

  return grid[m-1][n-1]
};



console.log(uniquePaths(5, 5))


// TIME O(MN); Space:  O(M)
function uniquePathsLessSpace(m,n){

  let memo = [] // memoise only the column values, accretively

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if(row ===0 || col===0){
        memo[col] = 1
      } else {
        memo[col] = memo[col] + memo[col-1]
      }
     }
  }

  return memo[n-1]
}

console.log(uniquePathsLessSpace(5, 5))
