function arrayOfArrayProducts(arr) {
  let left = []
  let right = []

 // construct left table
 for (let i = 0; i < arr.length; i++) {
  if (i === 0) {
    left[i] = 1
  } else {
    left[i] = arr[i - 1] * left[i - 1]
  }
}

  // construct right table
  for (let j = arr.length - 1; j >= 0; j--) {
    if (j === arr.length - 1) {
      right[j] = 1
    } else {
      right[j] = arr[j + 1] * right[j + 1]
    }
  }
  console.log('arr', arr)
  console.log('left', left)
  console.log('right', right)


  let res = []
  for(let c=0; c< arr.length; c++){
    res.push(left[c] * right[c])
  }
  return res

}

let t = arrayOfArrayProducts([8, 10, 2]);

console.log('answer', t)
