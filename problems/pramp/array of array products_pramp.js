/**
 * Array of Array Products {https://www.pramp.com/challenge/7Lg1WA1nZqfoWgPbgM0M}
Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

Solve without using division and analyze your solution’s time and space complexities.
 */

function multi(arr) {
  let res = []

  let left = []
  let right = []

// edge case
  if (arr.length <=1) return res

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


  // construct product arr
  for (let c = 0; c < arr.length; c++) {
    res[c] = left[c] * right[c]
  }

  return res
}




const t = multi([3, 4, 2, 5])
console.log(t)