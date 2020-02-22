//https://leetcode.com/problems/prison-cells-after-n-days/discuss/444975/JavaScript-Solution-w-Explanation

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {

  while(N){
      cells = getNewCells(cells)
      N--
  }
  return cells
};

function getNewCells(cells){
  let newCells = [...cells];
  for(let i = 0; i< cells.length; i++) {
      let left = cells[i-1]
      let right = cells[i+1]
      if(left === right){ // theyre the same,so cell occupied
          newCells[i]= 1
      } else {
          newCells[i] = 0
      }
  }
  return newCells
}



const cells = [0,1,0,1,1,0,0,1]

const a = prisonAfterNDays(cells, 7) // [0,0,1,1,0,0,0,0]
console.log(a)
