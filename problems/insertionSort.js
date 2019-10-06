module.exports = function(arr) {

  for(let i=1; i<arr.length; i++) {
      let selVal = arr[i]
      let j = i-1

      // check immediate left, and if < sel val, shift it to the right
      while( arr[j]  > selVal && j >=0) {
        // shift it to right
        arr[j+1] = arr[j]
        // replace arr[j]
        arr[j] = selVal
        j--
      }
  }
  
  return arr
}