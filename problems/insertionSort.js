module.exports = function(arr) {

  for(let i=1; i<arr.length; i++) {
      let current = arr[i]
      let j = i-1

      // check immediate left, and if < sel val, shift it to the right
      while( arr[j]  > current && j >=0) {
        // shift it to right
        arr[j+1] = arr[j]
        // replace arr[j]
        arr[j] = current
        j--
      }
  }
  
  return arr
}



function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i]

    // start from immediate left, move leftwards
    for (var j = i - 1; j >= 0 && (arr[j] > currentVal); j--) {
      arr[j + 1] = arr[j] // move lower value at j to the right
      arr[j] = currentVal // replace the value at j
    }
  }

  return arr
}


// alternative


function insertionSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i]

    // start from immediate left, move leftwards
    for (var j = i - 1; j >= 0 && (arr[j] > currentVal); j--) {
      arr[j + 1] = arr[j] // move lower value at j to the right
    }
    arr[j+1] = currentVal  // j decrements at the end of for loop, so add 1 to it
  }

  return arr
}


console.log("Method 1;", insertionSort([5, 1, -6, -2, 0]))
console.log("Method 2:", insertionSort2([5, 1, -6, -2, 0]))