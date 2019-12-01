// https://leetcode.com/problems/sum-of-two-integers/

// REFERENCE:  https://www.youtube.com/watch?v=qq64FrA2UXQ

//Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

function sum(a, b){
  while(b){
    let carry = (a & b) << 1
    let added = a ^ b
    a = added
    b = carry
  }
  return a
}


// recursive
function getSum(a, b){
  let carry = (a & b) << 1
  // console.log(carry)
  a ^= b
  if(carry){
    getSum (a, carry)
  }

  return a
}



let t = sum(1,3)
console.log(t)

let too = getSum(1,5)
console.log(too)