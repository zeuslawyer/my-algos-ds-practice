
// https://leetcode.com/problems/excel-sheet-column-number/
//  Given a column title as appear in an Excel sheet, return its corresponding column number.

// input AB, output ; input CX = 102  input XXZ, output 16874

let map = {}
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((item, index)=>{
  map[item.toUpperCase()] = 1+index
})

function excelCol(str){
  str = str.toUpperCase()
  let result =  0 

  for(let i = 0; i < str.length; i++){
    let char = str[i]
    result = result * 26 + map[char]
  }

  return result
}

let t = excelCol('xxz')
console.log(t)